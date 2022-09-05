import {
    Routes,
    Route,
    } from 'react-router-dom'
    import React from 'react'
    import Principal from '../screens/Principal'
    import Autenthification from '../components/Autenthification'
    
    const Road = () => {
      return (
        <Routes>
           <Route path ='/' element = {<Autenthification/>}/>
           <Route path = '/Home' element = {<Principal/>}/>
        </Routes>
      )
    }
    
    export default Road;
