import Principal from './screens/Principal'
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
