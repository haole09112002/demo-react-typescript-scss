import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <h1>Hello, SCSS with Vite!</h1>
      <button>Click me!</button>
    </div>
  )
}

export default App
