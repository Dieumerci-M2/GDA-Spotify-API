import React from 'react'
import { useEffect, useState } from 'react'
import Autenthification from '../components/Autenthification'
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
  const redirection = 'http://localhost:5173/'
  const outendpoint = 'https://accounts.spotify.com/authorize'
  const answer = 'token'
  return (
    <div>
        <Autenthification ClientId = {ClientId} redirection = {redirection} outendpoint = {outendpoint} answer = {answer}
            token = {token}/>
    </div>
  )
}

export default Secondary