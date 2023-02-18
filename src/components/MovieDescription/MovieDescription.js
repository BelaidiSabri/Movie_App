import React from 'react'
import { Link, useParams } from 'react-router-dom'
import '../MovieDescription/MovieDescription.css'





const MovieDescription = ({filtredMovie}) => {
  const {id} =useParams();
  let mov =filtredMovie.find((e)=>e.id===id)
  return (
      <div className='MovieDescription'>
        <Link to={'/'}>
          <div className="btn__back"><button><i class="fa-solid fa-chevron-left"></i>&nbsp;&nbsp;back</button>
          </div>
        </Link>
        <div className="des__container">
          <h1>{mov.title}</h1>
          <p><span style={{fontWeight:'600'}}>Description :</span><br /> <br />{mov.description}</p>
        </div>
        <div className="trailer__container">
          <div className="trailer_wrapper">
            <h2>Trailer </h2>
            <iframe  className='trailer' width="100%" height="100%" src={mov.vidURL} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
        </div>
    
  )
}

export default MovieDescription