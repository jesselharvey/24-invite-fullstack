import React from "react"
import logo from "./logo.svg"
// import { Counter } from './features/counter/Counter';
import { InviteHome } from "./features/invite/invite"
import { Going } from "./features/going/Going"
import { NotGoing } from "./features/notGoing/NotGoing"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <InviteHome />
        </Route>
        <Route exact path="/api/going">
          <Going />
        </Route>
        <Route path="/api/notGoing">
          <NotGoing />
        </Route> 
        {/* <InviteListHome /> */}
      </Switch>
    </Router>
  )
}

export default App
