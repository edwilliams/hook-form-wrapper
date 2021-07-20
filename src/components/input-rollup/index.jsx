const global = window
const process = { env: {} }

import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

var Input = /*#__PURE__*/ forwardRef(function (_ref, ref) {
  var readonly = _ref.readonly,
    type = _ref.type,
    name = _ref.name,
    label = _ref.label,
    defaultValue = _ref.defaultValue,
    value = _ref.value,
    _onFocus = _ref.onFocus,
    _onBlur = _ref.onBlur,
    _onClick = _ref.onClick,
    _onChange = _ref.onChange
  return /*#__PURE__*/ React.createElement(
    'section',
    {
      'data-component': 'input'
    },
    label &&
      /*#__PURE__*/ React.createElement(
        'p',
        {
          className: 'text-sm leading-sm text-grey'
        },
        label
      ),
    /*#__PURE__*/ React.createElement('input', {
      ref: ref,
      readOnly: readonly,
      name: name,
      type: type,
      defaultValue: defaultValue,
      value: value,
      onFocus: function onFocus() {
        return (
          _onFocus &&
          _onFocus({
            name: name
          })
        )
      },
      onBlur: function onBlur() {
        return (
          _onBlur &&
          _onBlur({
            name: name
          })
        )
      },
      onClick: function onClick() {
        return (
          _onClick &&
          _onClick({
            name: name
          })
        )
      },
      onChange: function onChange() {
        return (
          _onChange &&
          _onChange({
            name: name
          })
        )
      }
    })
  )
})
Input.propTypes = {
  readonly: PropTypes.bool,
  type: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  defaultValue: PropTypes.string,
  value: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func
}

var index = {
  Input: Input
}

export default index
