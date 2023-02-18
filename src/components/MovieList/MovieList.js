import React from 'react'
import Addmodal from '../Modal/Addmodal'
import MovieCard from '../MovieCard/MovieCard'
import '../MovieList/MovieList.css'
import'../Modal/Modal.css'

function MovieList({filtredMovie,toggleModal,deleteMovie,movie}) {

  

  return (
    <div className='movieList'>
      {filtredMovie.map((e)=><MovieCard e={e} deleteMovie={deleteMovie}></MovieCard>)}
      <button className="open__modal__btn" onClick={toggleModal}>Add Movie</button>
    </div>
  )
}

export default MovieList