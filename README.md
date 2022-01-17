# Metho Function

Function prototype extensions using the [Metho](https://github.com/jonrandy/metho) library:

## Usage

```js
import { curried } from 'metho-function'

// curried
const add = (a, b, c) => a+b+c

add(1, 2, 3) // 6
add[curried](1)(2)(3) // 6
```
