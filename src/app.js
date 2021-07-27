import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { withNav } from './with-nav'
import FormDemo from './form-demo'
import FormDemo01 from './form-demo-01'
import FormDemo02 from './form-demo-02'
import FormDemo03 from './form-demo-03'
import FormDemo04 from './form-demo-04'
import FormDemo05 from './form-demo-05'
import FormDemo06 from './form-demo-06'
import FormDemo07 from './form-demo-07'
import FormDemo08 from './form-demo-08'
import FormDemo09 from './form-demo-09'
import FormDemo10 from './form-demo-10'
import FormDemo11 from './form-demo-11'
import FormDemo12 from './form-demo-12'

const App = () => {
  // return (
  //   <div>
  //     <FormDemo11 id="one" />
  //     <FormDemo11 id="two" />
  //   </div>
  // )
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={FormDemo} />
        <Route exact path="/01" component={withNav(FormDemo01)} />
        <Route exact path="/02" component={withNav(FormDemo02)} />
        <Route exact path="/03" component={withNav(FormDemo03)} />
        <Route exact path="/04" component={withNav(FormDemo04)} />
        <Route exact path="/05" component={withNav(FormDemo05)} />
        <Route exact path="/06" component={withNav(FormDemo06)} />
        <Route exact path="/07" component={withNav(FormDemo07)} />
        <Route exact path="/08" component={withNav(FormDemo08)} />
        <Route exact path="/09" component={withNav(FormDemo09)} />
        <Route exact path="/10" component={withNav(FormDemo10)} />
        <Route exact path="/11" component={withNav(FormDemo11)} />
        <Route exact path="/12" component={withNav(FormDemo12)} />
      </Switch>
    </Router>
  )
}

export default App
