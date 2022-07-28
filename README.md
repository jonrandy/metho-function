# Metho Function

Function prototype extensions using the [Metho](https://github.com/jonrandy/metho) library:

## Usage

```js
import { curried, memoised } from 'metho-function'


// curried - returns a curried version of the function (created on first access)
const add = (a, b, c) => a+b+c
add(1, 2, 3) // 6
add[curried](1)(2)(3) // 6


// memoised - returns a memoised version of the function (created on first access)
expensiveFunction[memoised](a, b, c)
expensiveFunction[memoised](a, b, c) // this will be a memoised run - faster

// memoized - alias of memoised

```
