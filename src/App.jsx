import { useState } from 'react'
import './App.css'
import Autenthification from './components/Autenthification'
import InfoArtiste from './components/InfoArtiste'
import Main from './components/Main'
import MentionLeg from './components/MentionLeg'
import Music from './components/Music'
import NavBar from './components/NavBar'
import Playlist from './components/Playlist'
import Preferences from './components/Preferences'
import SideBar from './components/SideBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <SideBar />
      <NavBar />
      <Main />
    </div>
  )
}

export default App
