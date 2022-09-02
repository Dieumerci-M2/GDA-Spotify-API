import React from 'react'
import '../styles/autenthification.css'
import Button from 'react-bootstrap/Button'

const Autenthification = ({ClientId, redirection, outendpoint, answer, token, scope}) => {
  return (
    <section className='containe text-center'>
        <div className="contenu">
          <h1>Bienvenu chez GDA Music</h1>
          <div className="autenth">
            <div>
              <input type="mail" placeholder='E-mail'/>
            </div>
            <div>
              <input type="password" placeholder='pass' />
            </div>
          </div>
          <div className='connecte'> 
          { !token?
              <Button variant="primary" className='w-100'> <a href={`${outendpoint}?client_id=${ClientId}&redirect_uri=${redirection}&response_type=${answer}&scope=${scope}`}>Se connecter</a> </Button>
              : <Button>Se Déconnecter</Button>
            }
          </div>
        </div>
    </section>
  )
}

export default Autenthification