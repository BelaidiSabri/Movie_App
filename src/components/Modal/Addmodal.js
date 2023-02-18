import React, { useEffect, useRef, useState } from 'react'
import '../Modal/Modal.css'
import { v4 as uuidv4 } from 'uuid';

function Addmodal({movie,setMovie,modal,toggleModal,setFilter,filteredMovie}) {

    const add=()=> {setMovie([...movie,
        {id:uuidv4(), title:title__ref.current.value,
        description:description_ref.current.value,
        posterURL:link__ref.current.value,
        rating:rating__ref.current.value,type:type__ref.current.value}]);
        setFilter([...movie,
            {id:uuidv4(), title:title__ref.current.value,
            description:description_ref.current.value,
            posterURL:link__ref.current.value,
            rating:rating__ref.current.value,type:type__ref.current.value}])
    }
        
    

    const title__ref=useRef()
    const description_ref=useRef()
    const link__ref=useRef()
    const rating__ref=useRef()
    const type__ref=useRef()
    

   

  return (
    <div>
        {modal? (
            <div className="modal">
            <div className="modal__overlay"></div>
            <div className='modal__content'>
                <div className="modal__header">
                    <h1>Add Movie</h1>
                    <i class="fa-solid fa-rectangle-xmark fa-2x" onClick={toggleModal} ></i>
                </div>
                <div className="modal__details">
                    <span>Type</span>
                    <input type="text" className="modal__input" placeholder='Enter Type'ref={type__ref}/>
                    <span>Title</span>
                    <input type="text" className="modal__input" placeholder='Enter Title' ref={title__ref}/>
                    <span>Description</span>
                    <input type="text" className="modal__input" placeholder='Enter Description'ref={description_ref}/>
                    <span>Link</span>
                    <input type="text" className="modal__input" placeholder='Enter Poster link'ref={link__ref}/>
                    <span>Rating</span>
                    <input type="text" className="modal__input" placeholder='Enter Rating'ref={rating__ref}/>
                    <input type="submit" value="submit" onClick={add} className='submit__btn' />
                </div>
            </div>
        </div>
        ):null}
        
    </div>
  )
}

export default Addmodal