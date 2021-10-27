import * as Metho from "../metho/metho.js"
//import * as Metho from "metho"

const curryKey = Symbol('Curried function')

const target = Function.prototype

// Curried
export const curried = Metho.add(
	target,
	function() {
		return curry(this)
	}
)

// Partial - alias for Curried
export const partial = curried


// generic currying function
function curry(func) {
	if (!func[curryKey]) {
		console.log('curried created for ' + func.name)
		func[curryKey] = function curried(...args) {
			if (args.length >= func.length) {
				return func.apply(this, args)
			} else {
				return function(...args2) {
					return curried.apply(this, args.concat(args2))
				}
			}
		}
	}
	return func[curryKey]
}
