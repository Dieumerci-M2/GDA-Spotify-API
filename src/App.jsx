
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Principal from './screens/Principal'
import Secondary from './screens/Secondary'
import {BrowserRouter as Router} from 'react-router-dom'
import Road from './routes/Routes'

function App() {

  return (
    <div className="App">
      <Router>
          <Road />
      </Router>
    </div>
  )
}

export default App
