import React from 'react';
import "../Search-Bar/Search.styles.scss";


const Search = ({setSearch}) => {
 
  let handleChange = (e) =>{    //  when input changes
    setSearch(e.target.value);
  }

  let handleSubmit = (e) =>{   // to prevent refresh of page 

    e.preventDefault();
  }
  return (

    
    
    <form  className='d-flex justify-content-center gap-3 mb-5 '>
    <input 
    type="text" 
    onChange={handleChange} 
    placeholder=" Search characters" 
    className="input text-center"/>

    <button 
    onClick={handleSubmit} 
    className='btn btn-info'>Search</button>
    </form>
  )
}

export default Search