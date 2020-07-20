# Gen-X

> Iterate anything.

## Installation

```
npm install @gen-x/core
```

## Usage

In it's most basic form it just turns a value in to an iterator:

```javascript
import pipe from 'gen-x'

for await (const value of pipe()('hello world')) {
  console.info(value)
}

// "hello word"
```

But we can map the iterator's value into anything:

```javascript
import pipe from 'gen-x'

const hello = pipe((name) => `hello ${name}`)

for await (const value of hello('you')) {
  console.info(value)
}

// "hello you"
```

The map functions can return promises:

```javascript
import pipe from 'gen-x'

const hello = pipe(
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
import pipe from 'gen-x'

const hello = pipe(
  (name) => `hello ${name}`,
  function* (greeting) {
    yield* [...greeting]
  }
)

for await (const value of hello('you')) {
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

Async Generators can also be returned from maps, just like iterators:

```javascript
import pipe from 'gen-x'

const greetEveryone = pipe(
  async function* () {
    yield* await User.all()
  },
  ({ name }) => `hello ${name}`
)

for await (const greeting of greetEveryone()) {
  console.info(greeting)
}
```

ReadableStreams can be returned from operators:

```javascript
import pipe from 'gen-x'

const streamExample = pipe(
  () =>
    new ReadableStream({
      start(controller) {
        controller.enqueue(1)
        controller.enqueue(2)
        controller.enqueue(3)
        controller.close()
      },
    }),
  (x) => x + 1,
  (x) => x * 2
)

for await (const value of streamExample()) {
  console.info(value)
}

// 4
// 6
// 8
```

Or from a stream reader:

```javascript
import pipe from 'gen-x'

const readerExample = pipe(
  (id: number) => fetch(`https://my.api/${id}`),
  (resp) => resp.body.getReader()
)

for await (const chunk of readerExample(1)) {
  console.info(chunk)
}
```
