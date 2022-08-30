import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Principal from './screens/Principal'
import Secondary from './screens/Secondary'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Principal />
    </div>
  )
}

export default App
