import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import ranksData from '../../data/ranks'
import SpeciesListing from './SpeciesListing'

const NameAndDescription = (props) => {
  const name = props.match.params.name
  const rank = props.match.params.rank

  function findDescription () {
    let ranking = ranksData[rank].find(ranking => {
      return ranking.name === name
    })
    return ranking.description
  }

  return (
    <router>
      <div>
        <h2>{name}</h2>
        <p>
          {findDescription()}
        </p>
        <Link to={`${props.match.url}/species`}>Show species</Link>
        <Route path='/rank/:rank/:name/species' component={SpeciesListing} />
      </div>
    </router>
  )
}

export default NameAndDescription