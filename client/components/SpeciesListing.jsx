import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import speciesData from '../../data/species'
import Specie from './Specie'

const SpeciesListing = (props) => {
  const name = props.match.params.name

  function relevantSpecies () {
    let species = speciesData.filter(specie => {
      for (let prop in specie) {
        if (specie[prop] === name) {
          return specie
        }
      }
    })
    return species
  }

  return (
    <router>
      <div>
        <h2>Species</h2>
        <ul>
          {relevantSpecies().map((specie, key) => {
            return <li key={key}><Link to={`/species/${specie.id}`}>{specie.name}</Link></li>
            })}
        </ul>
      </div>
    </router>
  )
}

export default SpeciesListing