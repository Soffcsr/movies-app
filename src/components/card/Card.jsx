import React from 'react'
import './Card.css'

const Card = ({movie}) => {
  return (
    <div className='card'style={{ width: '18rem'}}>
        <img
        src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
        style={{width: '100%', height: '100%'}}
        />
        <div className=''></div>
        <p className='card-title'>{movie.title}</p>
    </div>
  )
}

export default Card