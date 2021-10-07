import React, { useContext } from 'react'
import { useController } from 'react-hook-form'
import isEqual from 'lodash.isequal'
import { Input as InputAntD } from 'antd'
// import 'antd/lib/input/style/index.css';

import { default as QueryBuilderComp } from '../query-builder'

import { Context } from './context'

export const Summary = ({ children }) => {
  const {
    data: { ref = {}, title, sections = [] }
  } = useContext(Context)

  return children ? (
    children
  ) : (
    <div>
      <h4 className="p-2 text-white bg-blue-500">{title}</h4>
      {sections.map(({ name, fields = [] }) => (
        <div
          key={name}
          // className={cx('p-2', { ['border-l-2 border-blue-500']: true }, { ['border']: !true })}
          className="p-2 border-l-2 border-blue-500"
        >
          <h5
            // className={cx('mb-2', { ['text-blue-500']: true })}
            className="mb-2 text-blue-500"
          >
            {name}
          </h5>

          {fields.map(({ name, label, value, errors = [], onClickError }) => (
            <ul key={name} className="list-disc list-inside">
              <li className="mb-2">
                <span className="font-bold">{label}</span>
                {errors.length === 0 ||
                errors.filter(({ show }) => show).length === 0 ? (
                  <p className="pl-5">{value}</p>
                ) : (
                  <ul>
                    {errors
                      .filter(({ show }) => show)
                      .map(({ desc }, i) => (
                        <li
                          key={i}
                          onClick={() => onClickError({ name })}
                          className="mt-2 text-red-500 font-bold cursor-pointer"
                        >
                          ⚠️ {desc}
                        </li>
                      ))}
                  </ul>
                )}
              </li>
            </ul>
          ))}
        </div>
      ))}

      <hr />

      <button
        className="block border p-2 mt-2 cursor-pointer"
        onClick={() => ref.current?.click()}
      >
        submit
      </button>
    </div>
  )
}

export const Input = ({ control, label, name, rules }) => {
  const {
    field, // i.e. { ref, name, value, onChange, onBlur }
    // fieldState: { invalid, isTouched, isDirty },
    // formState: { touchedFields, dirtyFields }
    formState: { errors }
  } = useController({
    name,
    control,
    rules,
    defaultValue: ''
  })

  const error = errors[name]

  return (
    <div>
      <label>{label}</label>
      <br />
      <InputAntD {...field} />
      {error?.message && (
        <p className="text-red-500">Error: {error?.message}</p>
      )}
    </div>
  )
}

export const QueryBuilder = {
  Component: ({
    name,
    label,
    validations,
    metaPayload,
    immutableTree,
    onChange
  }) => {
    const { data, setData } = useContext(Context)

    return (
      <div>
        <label>{label}</label>
        <br />
        <QueryBuilderComp.Component
          validations={validations}
          metaPayload={metaPayload}
          immutableTree={immutableTree}
          formMeta={{}}
          onChange={onChange}
          onError={({ displayName, value }) => {
            const newErrors = {
              ...data.queryBuilderErrors,
              [name]: {
                message: `"${value}" is an incorrect value for "${displayName}"`
              }
            }
            // using setData in onError can cause infinite rendering
            if (!isEqual(data.queryBuilderErrors, newErrors)) {
              setData({
                key: 'queryBuilderErrors',
                val: newErrors
              })
            }
          }}
        />
      </div>
    )
  },
  getImmutableTree: QueryBuilderComp.getImmutableTree
}
