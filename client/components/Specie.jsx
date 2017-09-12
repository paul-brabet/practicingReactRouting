import React from 'react'
import {Link} from 'react-router-dom'
import speciesData from '../../data/species'

const Specie = (props) => {
  const id = Number(props.match.params.id)

  const specie = speciesData.find(specie => {
    return specie.id === id
  })

  return (
    <div>
      <h2>{specie.name}</h2>
      <p>{specie.description}</p>
      <img src={specie.photo} alt="Species image"/>
      <ul>
        <li>Kingdom: <Link to={`/rank/kingdoms/${specie.kingdom}`}>{specie.kingdom} </Link> </li>
        <li>Phylum: <Link to={`/rank/phylum/${specie.phylum}`}>{specie.phylum} </Link> </li>
        <li>Class: <Link to={`/rank/class/${specie.class}`}>{specie.class} </Link> </li>
        <li>Order: <Link to={`/rank/order/${specie.order}`}>{specie.order} </Link> </li>
        <li>Family: <Link to={`/rank/family/${specie.family}`}>{specie.family} </Link> </li>
        <li>Genus: <Link to={`/rank/genus/${specie.genus}`}>{specie.genus} </Link> </li>
      </ul>
    </div>
  )
}

export default Specie