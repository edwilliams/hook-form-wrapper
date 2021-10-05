import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import FormDemo from './form-demo'

const App = () => {
  return (
    <>
      <style>{`
      .rule--error { display: none; }
      .rule-with-error .rule { border: 3px solid #e0a1a1; }
      `}</style>
      <Router>
        <Switch>
          <Route exact path="/" component={FormDemo} />
        </Switch>
      </Router>
    </>
  )
}

export default App
