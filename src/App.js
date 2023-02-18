import './App.css';
import { useEffect, useRef, useState } from 'react';
import Cover from './components/cover/Cover';
import MovieList from './components/MovieList/MovieList';
import Filter from './components/filter/Filter';
import Footer from './components/Footer/Footer';
import Addmodal from './components/Modal/Addmodal';
import { Route, Routes } from 'react-router-dom';
import MovieDescription from './components/MovieDescription/MovieDescription';
import { v4 as uuidv4 } from 'uuid';


/*Create the following components:
MovieCard
MovieList
Filter ( title, rate)
Every movie should have the following attributes: title, description, posterURL, rating
The user should be:
Able to add a new movie.
Filter the movies with title/rating.*/

function App() {
  
 let [movie,setMovie]=useState([
{
  id:uuidv4(),
  title:'One Punch Man',
type:"Anime",
 description:'The story of Saitama, a hero that does it just for fun & can defeat his enemies with a single punch. In a world of superhuman beings, Saitama is a unique hero, he can defeat enemies with a single punch.',
 posterURL:'https://cdn.europosters.eu/image/750/posters/one-punch-man-destruction-i61133.jpg',
 rating:5,
 vidURL:"https://www.youtube.com/embed/Poo5lqoWSGw"
},
 {
  id:uuidv4(),
  title:'Joker',
 type:"Movie",
 description:"A mentally troubled stand-up comedian embarks on a downward spiral that leads to the creation of an iconic villain",
 posterURL:'https://www.joblo.com/wp-content/uploads/2019/08/joker-poster-main2-1.jpg',
 rating:3,
 vidURL:"https://www.youtube.com/embed/zAGVQLHvwOY"
 
},
{
  id: uuidv4(),
  title:'Lord Of The Ring',
type:"Movie",
 description:"et in Middle-earth, the story tells of the Dark Lord Sauron, who seeks the One Ring, which contains part of his might, to return to power. ",
 posterURL:'https://m.media-amazon.com/images/I/81EBp0vOZZL.jpg',
 rating:4,
 vidURL:"https://www.youtube.com/embed/V75dMMIW2B4"
},
{
  id: uuidv4(),
  title:'Attack On Titan',
  type:"Anime",
 description:"Attack On Titan is about how a boy's life changes when he loses his family to titans. The main protagonist is a 15-year-old named Eren Yeager who lives with his sister and parents until one day, his village is destroyed by giants called titans.",
 posterURL:'https://m.media-amazon.com/images/I/81dH7-pkjiL.jpg',
 rating:3,
 vidURL:"https://www.youtube.com/embed/MGRm4IzK1SQ"
},
 {id: uuidv4(),
   title:'Jujutsu Kaisen',
 type:"Anime",
 description:"The Story runs around the 15-year-old teenager boy Itadori Yuji because he ate the Sukuna's finger Who was called the King of Curses",
 posterURL:'https://m.media-amazon.com/images/I/81s+jxE5KEL.jpg',
 rating:4,
 vidURL:"https://www.youtube.com/embed/pkKu9hLT-t8"
},
{id: uuidv4(),
  title:'The Platform',
type:"Movie",
description:"A vertical prison with one cell per level. Two people per cell. One only food platform and two minutes per day to feed from up to down.",
posterURL:'https://www.themoviedb.org/t/p/original/qjMy3qF0gIQAf75Xa824sa2YY5D.jpg',
 rating:4,
 vidURL:"https://www.youtube.com/embed/RlfooqeZcdY"
},
{id: uuidv4(),
  title:'Dark',
type:"Serie",
description:"The story follows characters from the fictional town of Winden, Germany, as they pursue the truth in the aftermath of a child's disappearance. They follow connections between four estranged families to unravel a sinister time travel conspiracy which spans several generations.",
 posterURL:'https://i.pinimg.com/564x/a4/23/0f/a4230f6c4e62f8a5928d7e48dfc0c823.jpg',
 rating:3,
 vidURL:"https://www.youtube.com/embed/ESEUoa-mz2c"
},
])
const [rate,setRate]=useState(0)
const [search,setSearch]=useState('')
const [modal,setModal]=useState(false)
const toggleModal=()=>{
    setModal(!modal)
}
const[filtredMovie,setFilter]=useState(movie)



const deleteMovie = (id) =>{
  const Afterdeletion = filtredMovie.filter(e=>e.id !=id)
  setFilter(Afterdeletion)
}

const toggleSearch=(text)=>{
  setSearch(text)
}
const toggleRate = ()=>{
  if(rate!=0){
    setFilter(movie.filter((e)=>e.rating >=rate)) ;
  }
  else{
    setFilter(movie)
  }
  
}




  return (
    <div className="App">

      <Routes>
        <Route path='/' element={
          <div className="homePage">
          <Addmodal filtredMovie={filtredMovie} setFilter={setFilter} modal={modal} toggleModal={toggleModal} setModal={setModal} movie={movie} setMovie={setMovie} toggleRate={toggleRate}></Addmodal>
          <div className='wrapper' style={modal?{filter:'blur(4px)'}:{}} >
          <Cover className='cover' ></Cover>
          <Filter className='filter' setRate={setRate} toggleRate={toggleRate} setSearch={setSearch} toggleSearch={toggleSearch}></Filter>
          <MovieList className='movieList' filtredMovie={filtredMovie.filter(e=>e.title.toLowerCase().includes(search.toLowerCase().trim()))} toggleModal={toggleModal} deleteMovie={deleteMovie} movie={movie}></MovieList>
          </div>
          </div>}/>
          <Route path='/MovieDescription/:id' element={<MovieDescription filtredMovie={filtredMovie}/>}/>
          <Route path='*' element={<h1>404 ont found</h1> }></Route>
        </Routes>
        <Footer className='footer'></Footer>
      
    </div>
  );
}

export default App;
