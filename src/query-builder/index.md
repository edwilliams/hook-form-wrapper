Basic implementation (All Levels)

```js
import { useEffect, useState } from 'react'
import { queryPayloadAllLevels, metaPayload } from './constants-md'
import QueryBuilder from './index'

const [demoQuery, setDemoQuery] = useState({})
const [immutableTree, setImmutableTree] = useState(
  QueryBuilder.getImmutableTree()
)

useEffect(() => {
  setTimeout(() => {
    setImmutableTree(
      QueryBuilder.getImmutableTree({
        query: queryPayloadAllLevels,
        meta: metaPayload
      })
    )
  }, 100)
}, [])

;<div>asdasd</div>
{
  /* <QueryBuilder.Component
    metaPayload={metaPayload}
    immutableTree={immutableTree}
    onChange={({ query, immutableTree }) => {
      setDemoQuery(query);
      setImmutableTree(immutableTree);
    }}
  />
  <xmp id="outputs">{JSON.stringify(demoQuery, null, 4)}</xmp>
</div>
  */
}
```

<!-- Colour Options

```js
import { useEffect, useState } from 'react';
import { queryPayloadAllLevels, metaPayload } from './constants-md';
import QueryBuilder from './index';

const [demoQuery, setDemoQuery] = useState({});
const [immutableTree, setImmutableTree] = useState(
  QueryBuilder.getImmutableTree()
);

useEffect(() => {
  setTimeout(() => {
    setImmutableTree(
      QueryBuilder.getImmutableTree({
        query: queryPayloadAllLevels,
        meta: metaPayload,
      })
    );
  }, 100);
}, []);

<div>
  <QueryBuilder.Component
    metaPayload={metaPayload}
    immutableTree={immutableTree}
    onChange={({ query, immutableTree }) => {
      setDemoQuery(query);
      setImmutableTree(immutableTree);
    }}
    colorOptions={{
      one: 'blueberry',
      two: 'dragon',
      three: 'lychee',
      four: 'rambutan',
      five: 'peach',
    }}
  />
  <xmp id="outputs">{JSON.stringify(demoQuery, null, 4)}</xmp>
</div>;
```

All different types

```js
import { useEffect, useState } from 'react';
import { queryPayloadAllTypes, metaPayload } from './constants-md';
import QueryBuilder from './index';

const [demoQuery, setDemoQuery] = useState({});
const [immutableTree, setImmutableTree] = useState(
  QueryBuilder.getImmutableTree()
);

useEffect(() => {
  setTimeout(() => {
    setImmutableTree(
      QueryBuilder.getImmutableTree({
        query: queryPayloadAllTypes,
        meta: metaPayload,
      })
    );
  }, 100);
}, []);

<div>
  <QueryBuilder.Component
    metaPayload={metaPayload}
    immutableTree={immutableTree}
    onChange={({ query, immutableTree }) => {
      setDemoQuery(query);
      setImmutableTree(immutableTree);
    }}
  />
  <xmp id="outputs">{JSON.stringify(demoQuery, null, 4)}</xmp>
</div>;
```

Custom Operators

```js
import { useEffect, useState } from 'react';
import { queryPayloadCustomOperators, metaPayload } from './constants-md';
import QueryBuilder from './index';

const [demoQuery, setDemoQuery] = useState({});
const [immutableTree, setImmutableTree] = useState(
  QueryBuilder.getImmutableTree()
);

const operators = {
  not_like: 'not like',
};

useEffect(() => {
  setTimeout(() => {
    setImmutableTree(
      QueryBuilder.getImmutableTree({
        query: queryPayloadCustomOperators,
        meta: metaPayload,
        operators,
      })
    );
  }, 100);
}, []);

<div>
  <QueryBuilder.Component
    metaPayload={metaPayload}
    immutableTree={immutableTree}
    operators={operators}
    onChange={({ query, immutableTree }) => {
      setDemoQuery(query);
      setImmutableTree(immutableTree);
    }}
  />
  <xmp id="outputs">{JSON.stringify(demoQuery, null, 4)}</xmp>
</div>;
```

Convert Value

```js
import { useEffect, useState } from 'react';
import { queryPayloadConvertValue, metaPayload } from './constants-md';
import QueryBuilder from './index';

const [demoQuery, setDemoQuery] = useState({});
const [immutableTree, setImmutableTree] = useState(
  QueryBuilder.getImmutableTree()
);

useEffect(() => {
  setTimeout(() => {
    setImmutableTree(
      QueryBuilder.getImmutableTree({
        query: queryPayloadConvertValue,
        meta: metaPayload,
      })
    );
  }, 100);
}, []);

<div>
  <QueryBuilder.Component
    metaPayload={metaPayload}
    immutableTree={immutableTree}
    convertValue={({ operator, value }) =>
      operator === 'is_null' ? 'custom value' : value
    }
    onChange={({ query, immutableTree }) => {
      setDemoQuery(query);
      setImmutableTree(immutableTree);
    }}
  />
  <xmp id="outputs">{JSON.stringify(demoQuery, null, 4)}</xmp>
</div>;
```

Validations

```js
import { useEffect, useState } from 'react';
import { queryPayloadValidations, metaPayload } from './constants-md';
import QueryBuilder from './index';

const [demoQuery, setDemoQuery] = useState({});
const [immutableTree, setImmutableTree] = useState(
  QueryBuilder.getImmutableTree()
);

useEffect(() => {
  setTimeout(() => {
    setImmutableTree(
      QueryBuilder.getImmutableTree({
        query: queryPayloadValidations,
        meta: metaPayload,
      })
    );
  }, 100);
}, []);

<div>
  <QueryBuilder.Component
    metaPayload={metaPayload}
    immutableTree={immutableTree}
    validations={{
      String: (val) => val.length < 5,
    }}
    onChange={({ query, immutableTree }) => {
      setDemoQuery(query);
      setImmutableTree(immutableTree);
    }}
  />
  <xmp id="outputs">{JSON.stringify(demoQuery, null, 4)}</xmp>
</div>;
```

Operators Allowed (e.g. number limited to only "equal")

_bug: this works for all types bar *text*, which always renders:_
`equal`, `not_equal`, `contains`, `not_contains`, `ends_with`

```js
import { useEffect, useState } from 'react';
import { queryPayloadOperatorsAllowed, metaPayload } from './constants-md';
import QueryBuilder from './index';

const [demoQuery, setDemoQuery] = useState({});
const [immutableTree, setImmutableTree] = useState(
  QueryBuilder.getImmutableTree()
);

useEffect(() => {
  setTimeout(() => {
    setImmutableTree(
      QueryBuilder.getImmutableTree({
        query: queryPayloadOperatorsAllowed,
        meta: metaPayload,
      })
    );
  }, 100);
}, []);

<div>
  <QueryBuilder.Component
    metaPayload={metaPayload}
    immutableTree={immutableTree}
    operatorsAllowed={{
      number: ['equal'],
    }}
    onChange={({ query, immutableTree }) => {
      setDemoQuery(query);
      setImmutableTree(immutableTree);
    }}
  />
  <xmp id="outputs">{JSON.stringify(demoQuery, null, 4)}</xmp>
</div>;
```

Readonly / disabled implementation (All Levels)

```js
import { useEffect, useState } from 'react';
import { queryPayloadDisabled, metaPayload } from './constants-md';
import QueryBuilder from './index';

const [demoQuery, setDemoQuery] = useState({});
const [immutableTree, setImmutableTree] = useState(
  QueryBuilder.getImmutableTree()
);

useEffect(() => {
  setTimeout(() => {
    setImmutableTree(
      QueryBuilder.getImmutableTree({
        query: queryPayloadDisabled,
        meta: metaPayload,
      })
    );
  }, 100);
}, []);

<div>
  <QueryBuilder.Component
    readonly /* or disabled */
    metaPayload={metaPayload}
    immutableTree={immutableTree}
    onChange={({ query, immutableTree }) => {
      setDemoQuery(query);
      setImmutableTree(immutableTree);
    }}
  />
  <xmp id="outputs">{JSON.stringify(demoQuery, null, 4)}</xmp>
</div>;
``` -->
