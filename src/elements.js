import React, { isValidElement } from 'react'
import * as R from 'ramda'

const isValidChild = obj =>
  isValidElement(obj)
  || typeof obj === 'string'

export const elem = R.curry((type, props, ...children) =>
  isValidChild(props)
    ? React.createElement(type, null, [props, ...children])
    : React.createElement(type, props, ...children)
)

export const div = elem('div')
export const p = elem('p')
export const a = elem('a')
export const h1 = elem('h1')
export const h3 = elem('h3')
export const b = elem('b')
export const i = elem('i')
export const u = elem('u')
