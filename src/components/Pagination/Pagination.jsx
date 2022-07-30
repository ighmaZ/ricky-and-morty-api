import React from 'react'

const Pagination = ({pageNum, setPageNum}) => {

    let previous = () => {       // to go to previous page through pagination

      if(  pageNum === 1)  return ; // since the page starts from one
      setPageNum((prev) => prev - 1)

    };

    let next = () => {       // to go to next page through pagination

        setPageNum((prev) => prev + 1)

    };

  return (
    <div className='container d-flex justify-content-center gap-5 my-5'>
        <button onClick={previous} className='btn btn-info'>Prev</button>
        <button onClick={next} className='btn btn-info'>Next</button>
    </div>
  )
}

export default Pagination