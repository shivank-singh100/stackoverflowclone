import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import { Navbar } from './components/navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>
        Welcome to StackOverflow Clone
      </h1>
      <Navbar />
    </>
  )
}

export default App
