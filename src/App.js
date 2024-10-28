import {Route, Switch} from 'react-router-dom'
import NotFound from './components/NotFound'
import TeamMatches from './components/TeamMatches'
import Home from './components/Home'
import './App.css'

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/ipl/:id" component={TeamMatches} />
      <Route component={NotFound} />
    </Switch>
  </>
)

export default App
