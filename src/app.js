import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { withNav } from './with-nav'
import FormDemo01 from './form-demo-01'
import FormDemo02 from './form-demo-02'
import FormDemo03 from './form-demo-03'
import FormDemo04 from './form-demo-04'
import FormDemo05 from './form-demo-05'
import FormDemo06 from './form-demo-06'
import FormDemo07 from './form-demo-07'
import FormDemo08 from './form-demo-08'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/01" component={withNav(FormDemo01)} />
        <Route exact path="/02" component={withNav(FormDemo02)} />
        <Route exact path="/03" component={withNav(FormDemo03)} />
        <Route exact path="/04" component={withNav(FormDemo04)} />
        <Route exact path="/05" component={withNav(FormDemo05)} />
        <Route exact path="/06" component={withNav(FormDemo06)} />
        <Route exact path="/07" component={withNav(FormDemo07)} />
        <Route exact path="/08" component={withNav(FormDemo08)} />
        <Redirect from="/" to="/01" />
      </Switch>
    </Router>
  )
}

export default App
