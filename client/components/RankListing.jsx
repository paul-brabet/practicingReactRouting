import React from 'react'
import {Link} from 'react-router-dom'
import ranksData from '../../data/ranks'

const RankListing = (props) => {
  const rank = props.match.params.rank
  return (
    <div>
      <h2>{rank}</h2>
      <ul>
        {ranksData[rank].map((subrank, key) => {
          return <li key={key}><Link to={`/rank/${rank}/${subrank.name}`}>{subrank.name}</Link></li>
        })}
      </ul>
    </div>
  )
}

export default RankListing