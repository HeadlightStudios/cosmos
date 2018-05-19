import React from 'react'
import ReactDOM from 'react-dom'
import { Heading } from '@headlight/cosmos'

const App = () => {
  return <Heading size={1}>Hello world</Heading>
}

ReactDOM.render(<App />, document.getElementById('root'))
