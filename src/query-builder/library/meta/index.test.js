import { convertMetaToFields, convertFieldsToMeta } from './'

import { meta } from '../test-data'

describe('Convert "Meta" array into "fields" for React Awesome Query Builder', () => {
  test('Convert meta to fields', () => {
    // expect(1).toEqual(1)
    expect(convertMetaToFields({ meta: meta.meta, values: [] })).toEqual(
      meta.fields
    )
  })
  // test('Convert fields to meta', () => {
  //   expect(convertFieldsToMeta({ fields: meta.fields })).toEqual(meta.meta)
  // })
})
