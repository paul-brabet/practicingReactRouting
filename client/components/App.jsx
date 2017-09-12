import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'
import RankListing from './RankListing'
import NameAndDescription from './NameAndDescription'

const App = (props) => {
  return (
      <Router>
        <div className="app">
          <h1>Navigating the taxonomic ranks</h1>
          <div className="nav-home-container">
            <Route path = '/' component ={Nav} />
            <Route exact path='/' component={Home} />
            <Route path='/list/:rank' component={RankListing} />
            <Route path='/rank/:rank/:name' component={NameAndDescription} />
          </div>
        </div>
      </Router>
  )
}

export default App

