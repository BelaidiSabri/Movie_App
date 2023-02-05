import React, { useEffect, useState } from 'react'
import '../filter/filter.css'

function Filter({setRate,toggleRate,setSearch,toggleSearch}) {


useEffect(()=>{
  document.addEventListener('keydown',detectKeyDown,true)
},[])  
const detectKeyDown =(e)=>{
  if (e.key=='Enter'){
    return true
  }
  else{
    return false
  }
}

const [active,setActive]=useState(false)
const isActive =()=>{
  setActive(!active)
}


  return (
    <div className='filter'>
       <input type="text" placeholder= " search..." className='filter__input' onChange={(e)=>setSearch(e.target.value)} />
       <i class="fa-solid fa-magnifying-glass" onClick={toggleSearch} ></i>
       <div className="dropdown">
        <div onClick={isActive} className='dropdown__menu'>
          <p>filter by</p>
          <i class="fa-solid fa-caret-down" style={{color:'white'}}></i>
        </div>

        {active&&  (

        <div className="dropdrown__content">
          <div className="item">
            <input type="radio" name="stars" id="stars1" value={0} onChange={(e)=>setRate(e.target.checked? e.target.value:null)} />
            <label htmlFor="stars1" > All</label>
          </div>
          <div className="item">
            <input type="radio" name="stars" id="stars1" value={1} onChange={(e)=>setRate(e.target.checked? e.target.value:null)} />
            <label htmlFor="stars1"> 1 stars</label>
          </div>
          <div className="item">
            <input type="radio" name="stars" id="" value={2} onChange={(e)=>setRate(e.target.checked? e.target.value:null)}  />
            <label htmlFor=""> 2 stars</label>
          </div>
          <div className="item">
            <input type="radio" name="stars" id="" value={3} onChange={(e)=>setRate(e.target.checked? e.target.value:null)}  />
            <label htmlFor=""> 3 stars</label>
          </div>
          <div className="item">
            <input type="radio" name="stars" id="" value={4} onChange={(e)=>{setRate(e.target.checked? e.target.value:null)}}  />
            <label htmlFor=""> 4 stars</label>
          </div>
          <div className="item">
            <input type="radio" name="stars" id="" value={5} onChange={(e)=>setRate(e.target.checked? e.target.value:null)}  />
            <label htmlFor=""> 5 stars</label>
          </div>
          <button onClick={toggleRate} className='filter__btn'>filter</button>
        </div>
        ) }
      </div>
    </div>
  )
}

export default Filter