import { isDate, getISO } from './utils'

// NB to add / remove % symbols for leaves with "like" or "not_like" operators
// _would_ require passing down all operators (in case "like" / "not_like" had been renamed)
// all the way from `QueryBuilder.getImmutableTree` to `_processLeafValue`
// hence storing it when `processRuleFields` executes
const _store = () => {
  const store = { operators: {} }
  return {
    get() {
      return store.operators
    },
    set(ops) {
      store.operators = { ...store.operators, ...ops }
      return { ...store.operators, ...ops }
    }
  }
}

const store = _store()

const _processRuleOperator = ({ allOperators = {}, operator = '' }) => {
  return operator === 'equal' || operator === 'datetime_equal'
    ? '=='
    : operator === 'not_equal' || operator === 'datetime_not_equal'
    ? '!='
    : operator === 'greater' || operator === 'datetime_greater'
    ? '>'
    : operator === 'greater_or_equal'
    ? '>='
    : operator === 'less' || operator === 'datetime_less'
    ? '<'
    : operator === 'less_or_equal'
    ? '<='
    : operator === allOperators.begins_with ||
      operator === allOperators.ends_with
    ? allOperators.like
    : operator
}

const _processRuleValue = ({
  type, // List | Int | Boolean | DateTime | String
  allOperators = {},
  convertValue = null,
  field,
  value = [],
  operator = ''
}) => {
  const isDateTime =
    typeof operator === 'string' && operator.includes('datetime_')

  const val =
    // NB: default value for is_null / is_not_null is empty string
    value[0] === undefined &&
    (operator === allOperators.is_null || operator === allOperators.is_not_null)
      ? ''
      : value[0] === undefined
      ? null
      : isDateTime
      ? getISO(value[0])
      : operator === allOperators.begins_with
      ? `${value[0]}%`
      : operator === allOperators.ends_with
      ? `%${value[0]}`
      : operator === allOperators.like || operator === allOperators.not_like
      ? `%${value[0]}%`
      : type === 'List'
      ? value.join(', ')
      : value[0]

  return convertValue
    ? convertValue({
        field,
        value: val,
        operator
      })
    : val
}

export const processRuleFields = ({
  type,
  allOperators,
  convertValue,
  operator,
  field,
  value
}) => {
  store.set(allOperators)

  return {
    Operator: _processRuleOperator({ allOperators, operator }),
    Attribute: field,
    Value: _processRuleValue({
      type,
      allOperators,
      convertValue,
      field,
      value,
      operator
    })
  }
}

// ------------------------------------------------------------

const lastCharPercent = (str = '') =>
  str && str.split('')[str.length - 1] === '%'
const firstCharPercent = (str = '') => str && str.split('')[0] === '%'

const _processLeafOperator = ({ _type, Operator = '', Value }) => {
  const str =
    Operator === '=='
      ? 'equal'
      : Operator === '!='
      ? 'not_equal'
      : Operator === '<'
      ? 'less'
      : Operator === '>'
      ? 'greater'
      : Operator === '<='
      ? 'less_or_equal'
      : Operator === '>='
      ? 'greater_or_equal'
      : Operator === 'like' &&
        !firstCharPercent(Value) &&
        lastCharPercent(Value)
      ? 'begins_with'
      : Operator === 'like' &&
        firstCharPercent(Value) &&
        !lastCharPercent(Value)
      ? 'ends_with'
      : Operator

  const dateTimeOperators = ['==', '!=', '<', '>', '<=', '>=']

  return _type === 'datetime' && dateTimeOperators.some(op => op === Operator)
    ? `datetime_${str}`
    : str
}

const _processLeafValue = ({ _type, Value, Operator = '' }) => {
  const ops = store.get()
  const like = ops.like || 'like'
  const not_like = ops.not_like || 'not_like'

  return Value === null
    ? []
    : _type === 'multiselect'
    ? [Value.split(',')]
    : Operator === like || Operator === not_like
    ? // ends with (e.g. "foo%")
      firstCharPercent(Value) && !lastCharPercent(Value)
      ? [Value.substring(1, Value.length)]
      : // begins with (e.g. "%foo")
      !firstCharPercent(Value) && lastCharPercent(Value)
      ? [Value.substring(0, Value.length - 1)]
      : // like (e.g. "%foo%")
        [Value.substring(1, Value.length - 1)]
    : [Value]
}

const _processLeafValueSrc = ({ Operator }) => {
  return Operator === null ? [] : ['value']
}

// NB this determines that the widget reads the value correctly,
// NOT what type of widget to render
// the widget to render is determined by field (i.e. Attribute)
const _processLeafValueType = ({ _type, Value }) => {
  return Value === null
    ? []
    : _type === 'datetime'
    ? isDate(Value)
      ? ['datetime']
      : ['text'] // this prevents invalid date strings breaking Ant Design Date Picker
    : _type === 'boolean'
    ? ['boolean']
    : _type === 'number'
    ? ['number']
    : _type === 'multiselect'
    ? ['multiselect']
    : ['text'] // default
}

export const processLeafFields = ({ _type, Operator, Attribute, Value }) => {
  // NB some dates come in with whitespace, e.g. '2018-08-20T00: 00: 00.000Z'
  const val =
    _type === 'datetime' && Value !== null ? Value.split(' ').join('') : Value
  return {
    field: Attribute,
    operator: _processLeafOperator({ _type, Operator, Value }),
    value: _processLeafValue({ _type, Value: val, Operator }),
    valueSrc: _processLeafValueSrc({ Operator }),
    valueType: _processLeafValueType({ _type, Value: val })
  }
}
