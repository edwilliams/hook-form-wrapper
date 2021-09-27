import React from 'react'
import AntdConfig from 'react-awesome-query-builder/lib/config/antd'
import { Select, Input, Switch } from 'antd'

import { convertMetaToFields } from './library/meta'

const getConfig = ({ operators = {}, readonly, meta, validations }) => {
  const operatorKeys = {
    is_null: operators.is_null || 'is_null',
    is_not_null: operators.is_not_null || 'is_not_null',
    like: operators.like || 'like',
    not_like: operators.not_like || 'not_like',
    in: operators.in || 'in',
    not_in: operators.not_in || 'not_in',
    begins_with: operators.begins_with || 'begins_with',
    ends_with: operators.ends_with || 'ends_with'
  }

  const _operators = {
    // https://github.com/ukrbublik/react-awesome-query-builder/issues/489#issuecomment-906428460
    equal: {
      label: 'Equal to'
    },
    not_equal: {
      label: 'Not equal to'
    },
    greater: {
      label: 'Greater than'
    },
    greater_or_equal: {
      label: 'Greater than or equal to'
    },
    less: {
      label: 'Less than'
    },
    less_or_equal: {
      label: 'Less than or equal to'
    },
    datetime_less: {
      label: 'Before'
    },
    datetime_greater: {
      label: 'After'
    },
    datetime_equal: {
      label: 'Equal to'
    },
    datetime_not_equal: {
      label: 'Not equal to'
    }
  }

  _operators[operatorKeys.is_null] = {
    cardinality: 0,
    label: 'Is null'
  }

  _operators[operatorKeys.is_not_null] = {
    cardinality: 0,
    label: 'Is not null'
  }

  _operators[operatorKeys.like] = {
    ...AntdConfig.operators.like,
    label: 'Contains'
  }

  _operators[operatorKeys.not_like] = {
    ...AntdConfig.operators.not_like,
    label: 'Not contains'
  }

  _operators[operatorKeys.in] = {
    label: 'Is one of'
  }

  _operators[operatorKeys.not_in] = {
    label: 'Is not one of'
  }

  _operators[operatorKeys.begins_with] = {
    label: 'Begins with'
  }

  _operators[operatorKeys.ends_with] = {
    label: 'Ends with'
  }

  const types = {
    ...AntdConfig.types,
    text: {
      ...AntdConfig.types.text,
      widgets: {
        ...AntdConfig.types.text.widgets,
        text: {
          ...AntdConfig.types.text.widgets.text,
          operators: [
            'equal',
            'not_equal',
            'is_empty',
            'is_not_empty',
            // add operators to as may be custom (e.g. 'is null')
            operatorKeys.begins_with,
            operatorKeys.ends_with,
            operatorKeys.is_null,
            operatorKeys.is_not_null,
            operatorKeys.like,
            operatorKeys.not_like
          ]
        }
      }
    },
    number: {
      ...AntdConfig.types.number,
      widgets: {
        ...AntdConfig.types.number.widgets,
        number: {
          ...AntdConfig.types.number.widgets.number,
          operators: [
            'equal',
            'not_equal',
            'less',
            'less_or_equal',
            'greater',
            'greater_or_equal',
            // add operators to as may be custom (e.g. 'is null')
            operatorKeys.is_null,
            operatorKeys.is_not_null
          ]
        }
      }
    },
    datetime: {
      ...AntdConfig.types.datetime,
      widgets: {
        ...AntdConfig.types.datetime.widgets,
        datetime: {
          ...AntdConfig.types.datetime.widgets.datetime,
          operators: [
            'datetime_equal',
            'datetime_not_equal',
            'datetime_less',
            'datetime_greater',
            operatorKeys.is_null,
            operatorKeys.is_not_null
          ]
        }
      }
    },
    multiselect: {
      ...AntdConfig.types.multiselect,
      widgets: {
        ...AntdConfig.types.multiselect.widgets,
        multiselect: {
          ...AntdConfig.types.multiselect.widgets.multiselect,
          operators: [
            'is_empty',
            'is_not_empty',
            // add operators to as may be custom (e.g. 'is null')
            operatorKeys.in,
            operatorKeys.not_in,
            operatorKeys.is_null,
            operatorKeys.is_not_null
          ]
        }
      }
    }
  }

  return {
    ...AntdConfig,
    settings: {
      ...AntdConfig.settings,
      showErrorMessage: true,
      renderSize: 'middle',
      renderField: readonly
        ? ({ selectedLabel }) => <Select defaultValue={selectedLabel} disabled />
        : AntdConfig.settings.renderField,
      renderOperator: readonly
        ? ({ selectedLabel }) => <Select defaultValue={selectedLabel} disabled />
        : AntdConfig.settings.renderOperator
    },
    operators: _operators,
    widgets: {
      ...AntdConfig.widgets,
      text: readonly
        ? {
            ...AntdConfig.widgets.text,
            factory: ({ value }) => <Input disabled value={value} />
          }
        : AntdConfig.widgets.text,
      multiselect: readonly
        ? {
            ...AntdConfig.widgets.multiselect,
            factory: ({ value }) => <Input disabled value={value.join(', ')} />
          }
        : AntdConfig.widgets.multiselect,
      datetime: readonly
        ? {
            ...AntdConfig.widgets.datetime,
            factory: ({ value }) => <Input disabled value={value} />
          }
        : AntdConfig.widgets.datetime,
      number: readonly
        ? {
            ...AntdConfig.widgets.number,
            factory: ({ value }) => <Input disabled value={value} />
          }
        : AntdConfig.widgets.number,
      boolean: readonly
        ? {
            ...AntdConfig.widgets.boolean,
            factory: ({ value }) => <Switch disabled defaultChecked={value} />
          }
        : AntdConfig.widgets.boolean
    },
    types,
    fields: convertMetaToFields({ meta, validations })
  }
}

export default getConfig
