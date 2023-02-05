import './App.css';
import { useEffect, useRef, useState } from 'react';
import Cover from './components/cover/Cover';
import MovieList from './components/MovieList/MovieList';
import Filter from './components/filter/Filter';
import Footer from './components/Footer/Footer';
import Addmodal from './components/Modal/Addmodal';


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
{title:'One Punch Man',
type:"Anime",
 description:'The story of Saitama, a hero that does it just for fun & can defeat his enemies with a single punch. In a world of superhuman beings, Saitama is a unique hero, he can defeat enemies with a single punch.',
 posterURL:'https://cdn.europosters.eu/image/750/posters/one-punch-man-destruction-i61133.jpg',
 rating:5
},
 {title:'Joker',
 type:"Movie",
 description:"A mentally troubled stand-up comedian embarks on a downward spiral that leads to the creation of an iconic villain",
 posterURL:'https://www.joblo.com/wp-content/uploads/2019/08/joker-poster-main2-1.jpg',
 rating:3
},
{title:'Lord Of The Ring',
type:"Movie",
 description:"et in Middle-earth, the story tells of the Dark Lord Sauron, who seeks the One Ring, which contains part of his might, to return to power. ",
 posterURL:'https://m.media-amazon.com/images/I/81EBp0vOZZL.jpg',
 rating:4
},
{title:'Attack On Titan',
  type:"Anime",
 description:"Attack On Titan is about how a boy's life changes when he loses his family to titans. The main protagonist is a 15-year-old named Eren Yeager who lives with his sister and parents until one day, his village is destroyed by giants called titans.",
 posterURL:'https://m.media-amazon.com/images/I/81dH7-pkjiL.jpg',
 rating:3
},
 {title:'Jujutsu Kaisen',
 type:"Anime",
 description:"The Story runs around the 15-year-old teenager boy Itadori Yuji because he ate the Sukuna's finger Who was called the King of Curses",
 posterURL:'https://m.media-amazon.com/images/I/81s+jxE5KEL.jpg',
 rating:4
},
{title:'The Platform',
type:"Movie",
description:"A vertical prison with one cell per level. Two people per cell. One only food platform and two minutes per day to feed from up to down.",
posterURL:'https://www.themoviedb.org/t/p/original/qjMy3qF0gIQAf75Xa824sa2YY5D.jpg',
 rating:4
},
{title:'Dark',
type:"Serie",
description:"The story follows characters from the fictional town of Winden, Germany, as they pursue the truth in the aftermath of a child's disappearance. They follow connections between four estranged families to unravel a sinister time travel conspiracy which spans several generations.",
 posterURL:'https://i.pinimg.com/564x/a4/23/0f/a4230f6c4e62f8a5928d7e48dfc0c823.jpg',
 rating:3
},
])
const [rate,setRate]=useState(0)
const [search,setSearch]=useState('')
const [modal,setModal]=useState(false)
const toggleModal=()=>{
    setModal(!modal)
}
const[filtredMovie,setFilter]=useState(movie)


const toggleSearch = ()=>{
  setFilter(movie.filter((e)=>{if(search=='') {return e} else if (e.title.toLowerCase().includes(search.toLowerCase())){return e}}))
}

const toggleRate = ()=>{
  if(rate!=0){
    setFilter( movie.filter((e)=>e.rating ==rate) );
  }
  else{
    setFilter(movie)
  }
}




  return (
    <div className="App">
      <Addmodal filtredMovie={filtredMovie} setFilter={setFilter} modal={modal} toggleModal={toggleModal} setModal={setModal} movie={movie} setMovie={setMovie} toggleRate={toggleRate}></Addmodal>
      <div className='wrapper' style={modal?{filter:'blur(4px)'}:{}} >
      <Cover className='cover' id='couvre' ></Cover>
      <Filter className='filter' setRate={setRate} toggleRate={toggleRate} setSearch={setSearch} toggleSearch={toggleSearch}></Filter>
      <MovieList className='movieList' filtredMovie={filtredMovie} toggleModal={toggleModal}></MovieList>
      <Footer className='footer'></Footer>
      </div>
    </div>
  );
}

export default App;
