//import * as Metho from "../metho/metho.js"
import * as Metho from "metho"

const
	curryKey = Symbol('Curried function'),
	memoKey = Symbol('Memoised function')

const target = Function.prototype

// Curried
export const curried = Metho.add(
	target,
	function curried() {
		return this[curryKey] || (this[curryKey]=curry(this))
	}
)

// Memoised
export const memoised = Metho.add(
	target,
	function memoised() {
		return this[memoKey] || (this[memoKey]=memo(this))
	}
)
export const memoized = memoised


// generic currying function
function curry(func) {
	return function curried(...args) {
		if (args.length >= func.length) {
			return func.apply(this, args)
		} else {
			return function(...args2) {
				return curried.apply(this, args.concat(args2))
			}
		}
	}
}

// generic memoisation function
function memo(func) {
	const cache = new Map()
	return function memoised(...args) {
		const key = JSON.stringify(args)
		if (cache.has(key)) return cache.get(key)
		const result = func(...args)
		cache.set(key, result)
		return result
	}
}
