import React from 'react'
import SideBar from '../components/SideBar'
import NavBar from '../components/NavBar'
import Main from '../components/Main'
import '../styles/principal.css'
const Principal = () => {


  return (
    <div className='containe'>
        <SideBar />
        <div className='middle'>
            <NavBar />
            <Main />
        </div>
        
    </div>
  )
}

export default Principal