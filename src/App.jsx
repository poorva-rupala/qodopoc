import React from 'react'
import UserDataFetcher from './components/UserDataFetcher'

function App() {
  return (
    <div className="app-container">
      <h1>Qodo AI Code Review Tool Demo</h1>
      <p>This demo shows common issues that Qodo detects in React code</p>
      <UserDataFetcher />
    </div>
  )
}

export default App
