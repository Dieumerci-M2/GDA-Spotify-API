import React from 'react'
import SideBar from '../components/SideBar'
import NavBar from '../components/NavBar'
import Main from '../components/Main'
import '../styles/principal.css'
const Principal = () => {
  const ClientId = '03880715cb5c42db88b289ec843534bc'
  const redirection = 'http://localhost:5173/'
  const outendpoint = 'https://accounts.spotify.com/authorize'
  const answer = 'token'
  return (
    <div className='containe'>
        <SideBar />
        <div className='middle'>
            <NavBar ClientId = {ClientId} redirection = {redirection} outendpoint = {outendpoint} answer = {answer} />
            <Main />
        </div>
        
    </div>
  )
}

export default Principal