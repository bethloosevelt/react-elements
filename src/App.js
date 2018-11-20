import { elem, p, h1, div, b, i, a, u, h3 } from './elements'
import React from 'react'
import delay from 'delay'

async function* elementGenerator() {
  yield p("getting started")
  await delay(5000)
  yield i("continuing work")
  await delay(3000)
  yield p("about done")
  await delay(500)
  yield b("all done")
}

class Progress extends React.Component {
  constructor() {
    super()
    this.gen = elementGenerator()
    this.state = { next: null }
    this.render = () => this.state.next
    this.run()
  }
  async run() {
    for await(const next of this.gen) {
      this.setState({ next })
    }
  }
}

const ProgressKeeper = (props = {})=>
  elem(Progress, props)

const App = ({ url }) =>
  div(
    h1("Demonstration of generational component"),
    h3("As well as functional element bindings"),
    p(
      "check it out ",
      a({href: url}, u("here")),
    ),
    ProgressKeeper(),
  )

export default App;
