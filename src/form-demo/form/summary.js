import { useContext } from 'react'
// import cx from 'classnames'

import { FormContext } from './context'

export const FormSummary = ({ children }) => {
  const {
    data: { ref = {}, title, sections = [] }
  } = useContext(FormContext)

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
                {errors.length === 0 || errors.filter(({ show }) => show).length === 0 ? (
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

      <button className="block border p-2 mt-2 cursor-pointer" onClick={() => ref.current?.click()}>
        submit
      </button>
    </div>
  )
}
