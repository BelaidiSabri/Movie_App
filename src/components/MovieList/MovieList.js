import React from 'react'
import Addmodal from '../Modal/Addmodal'
import MovieCard from '../MovieCard/MovieCard'
import '../MovieList/MovieList.css'
import'../Modal/Modal.css'

function MovieList({filtredMovie,toggleModal}) {

  

  return (
    <div className='movieList'>
      {filtredMovie.map((e)=><MovieCard e={e}></MovieCard>)}
      <button className="open__modal__btn" onClick={toggleModal}>Add Movie</button>
    </div>
  )
}

export default MovieList