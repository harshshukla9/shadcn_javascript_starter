import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from '@/components/ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button variant="destructive">Click me</Button>
      <h1>Your React + Tailwind + Shadcn UI + javascript is ready to use</h1>
      
    </>
  )
}

export default App
