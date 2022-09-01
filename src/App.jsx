
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Principal from './screens/Principal'
import Secondary from './screens/Secondary'
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from './routes/Routes'
function App() {

  return (
    <div className="App">
      <Router>
          <Routes />
      </Router>
    </div>
  )
}

export default App
