import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import FormDemo from './form-demo'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={FormDemo} />
      </Switch>
    </Router>
  )
}

export default App
