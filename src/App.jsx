import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import FetchData from './FetchData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <FetchData />
    </div>
  )
}

export default App
