import { useState } from 'react'
import Menu from "./Menu"
import './App.css'
import Personal from './Personal'

function App() {
  return (
    <div className='layout'>
      <Menu />
      <Personal />
    </div>
  )
}

export default App
