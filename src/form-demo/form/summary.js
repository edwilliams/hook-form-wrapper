import { useContext } from 'react'
import cx from 'classnames'

import { FormContext } from './context'

export const FormSummary = () => {
  const { data } = useContext(FormContext)
  return (
    <div>
      <h4 className="p-2 text-white bg-blue-500">Summary</h4>
      <div className={cx('p-2', { ['border-l-2 border-blue-500']: true }, { ['border']: !true })}>
        <h5 className="mb-2 text-blue-500">Details</h5>
        <ul className="list-disc list-inside">
          {true ? (
            <li className="mb-2">
              <span className="font-bold">Name</span>
              <ul className="pl-5">
                <li>[typed stuff]</li>
              </ul>
            </li>
          ) : (
            <p className="mb-2 text-red-500 font-bold">⚠️ Please complete name</p>
          )}
        </ul>
        <ul className="list-disc list-inside">
          <li className="mb-2">
            <span className="font-bold">Description</span>
            <ul className="pl-5">
              <li>[typed stuff]</li>
            </ul>
          </li>
        </ul>
      </div>

      <hr />

      <button
        className="block border p-2 mt-2 cursor-pointer"
        onClick={() => data.ref?.current.click()}
      >
        submit
      </button>
    </div>
  )
}
