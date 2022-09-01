import {
    Routes,
    Route,
    } from 'react-router-dom'
    import React from 'react'
    import Principal from '../screens/Principal'
    import Secondary from '../screens/Secondary'
    
    const Road = () => {
      return (
        <Routes>
           <Route path ='/' element = {<Secondary/>}/>
           <Route path = '/Home' element = {<Principal/>}/>
        </Routes>
      )
    }
    
    export default Road;
