//import * as Metho from "../metho/metho.js"
import * as Metho from "metho"

const target = Function.prototype

// Curried
export const curried = Metho.add(
  target,
  function() {
    return null
  }
)

// Partial - alias for Curried
export const partial = curried
