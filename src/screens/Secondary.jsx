import React from 'react'
import { useEffect, useState } from 'react'
import Autenthification from '../components/Autenthification'
//import { userContext } from './MyContext'
//import Principal from './Principal'
const Secondary = () => {
  const [token, setToken] = useState("")
  useEffect(()=>{
    const hash = window.location.hash
    let token = window.localStorage.getItem('token')
    if(!token && hash){
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
      window.location.hash = ""
      window.localStorage.setItem("token", token)
    }
    setToken(token)
  },[])
  const ClientId = '03880715cb5c42db88b289ec843534bc'
  const redirection = 'http://localhost:5173/home'
  const outendpoint = 'https://accounts.spotify.com/authorize'
  const scope = 'user-read-email playlist-read-private'
  const answer = 'token'
  return (
    <div>
        {/* <userContext.Provider value = {token}> */}
           {/* <Principal token={token}/> */}
        {/* </userContext.Provider> */}
        <Autenthification ClientId = {ClientId} redirection = {redirection} outendpoint = {outendpoint} answer = {answer}
            token = {token} scope = {scope}/>
    </div>
  )
}

export default Secondary