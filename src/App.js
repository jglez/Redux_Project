import React from 'react'
import './App.css'
import Characters from './components/Characters.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <h1>Rick and Morty</h1>

        <Characters />

      </header>
    </div>
  )
}

export default App
