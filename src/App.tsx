import { useState } from 'react'
import './App.css'
import styled from 'styled-components'

function App() {

  return (
    <div className="App">
      <Square></Square>
      <h1>Hello</h1>
      <h1>Hello</h1>
    </div>
  )
}

export default App

const Square = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
`