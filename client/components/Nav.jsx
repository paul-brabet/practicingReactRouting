import React from 'react'
import {Link} from 'react-router-dom'
import ranksData from '../../data/ranks'

const Nav = () => {
  function getRanks () {
    const ranks = Object.keys(ranksData)
    return ranks.map((rank, key) => {
      return <li key={key}><Link to={`/list/${rank}`}>{rank}</Link></li>
    })
  }

  return (
    <div className="nav">
      <h2>Nav</h2>
      <ul>
        {getRanks()}
      </ul>
    </div>
  )
}

export default Nav