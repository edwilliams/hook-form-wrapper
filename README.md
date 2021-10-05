https://forms-with-query-builder.netlify.app/

---

## notes

**Query Builder Error Handling**

- include the query builder in the form: form summary unaffected
- pass in `name` to query builder: name shows in form summary
- _NB updates to query builder do not result in a value (i.e. a query) rendering in the form summary, as per other form elements_
- we trigger errors on a per field basis in query builder by passing in validations prop
- i.e. `validations={{ String: val => val.length < 5 }}`
- validations then takes place in `config.fields` (via /src/query-builder/library/meta/index.js)
- and return an object via `onError` (w/ name, type, value and formMeta)
- we wrap form elements in order to make use of `useController` then manage errors
- so for consistency we are wrapping query builder
- we declare onError in the wrapped query builder to bury the error handling
- todo: unset error in form summary after error is addressed
- todo: investigate onError causing infinite rendering
- todo: prevent submission if query builder errors are present
- todo: confirm query builder error message / data

## refs

https://www.w3.org/WAI/tutorials/forms/
