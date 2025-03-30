import { useState } from 'react'
import labImage from './assets/lab9.5img.png'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './Greeting'
import CounterStatus from './CounterStatus'
import Quote from './Quote'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={labImage} className="logo react" alt="Custom logo" />
        </a>
      </div>
      
      <h1>Vite + Jeff</h1>

      <Greeting />

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <CounterStatus count={count} />

        <Quote />

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
