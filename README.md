# Caterpillar.js

> Iterate anything.

## Installation

```
npm install caterpillar
```

## Usage

In it's most basic form it just turns a value in to an iterator:

```javascript
import cat from 'caterpillar'

for await (const value of cat()('hello world')) {
  console.info(value)
}

// "hello word"
```

But we can map the iterator's value into anything:

```javascript
import cat from 'caterpillar'

const hello = cat((name) => `hello ${name}`)

for await (const value of hello('you')) {
  console.info(value)
}

// "hello you"
```

The map functions can return promises:

```javascript
import cat from 'caterpillar'

const hello = cat(
  async (id) => getUser(id),
  ({ name }) => `hello ${name}`
)

for await (const value of hello('007')) {
  console.info(value)
}

// "hello James Bond"
```

You can also map iterators, which in turn will call all subsequent maps with each iterated item:

```javascript
import cat from 'caterpillar'

const hello = cat(
  name => `hello ${name}`,
  function* (greeting) {
    for (const letter of [...greeting]) {
      yield letter
    }
  }
)

for await (const value of hello('you)) {
  console.info(value)
}

// "h"
// "e"
// "l"
// "l"
// "o"
// " "
// "y"
// "o"
// "u"
```
