import React from 'react'
import {BsSearch} from 'react-icons/bs'
import '../styles/navbar.css'
import { useState } from 'react'
import Autenthification from './Autenthification'
const NavBar = ({token, setToken, lookat, searchArtist}) => {
    const logout = ()=>{
      setToken('')
      window.localStorage.removeItem(token)
    }
  return (
    <div className='nav '>
        <form className='search ms-4' onSubmit={searchArtist}>
            <input placeholder='search for Artists' type="input" className='enter me-2' 
            onChange={lookat} /><button type='submit'onClick={()=>searchArtist}>Search</button>
        </form>
        <div className="autenthification me-4 mt-3">
          <div className='picture'>
            <span className='profil'>photo</span>
            <button onClick={ ()=> logout}>Se Déconncter</button> 
          </div> 
          <h5 className='name-profil'>Dieu-merci</h5>
        </div>        
    </div>   
  )
}

export default NavBar