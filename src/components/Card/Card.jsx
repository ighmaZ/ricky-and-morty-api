import React from 'react'
import "../Card/Card.styles.scss"

const Card = ({results}) => {    // results props contains character details from api
    
    let characterCard;   // characterCard contains info of the character

    if(results) {

      
        characterCard = results.map((character) => { 

            let { id , name , image } = character; 

            return (

                <div key={id} className="col-4 mb-4">
                <div className="card">
                    <img src={image} alt="" className='img-fluid img '/>
                    <div className="info">
                        <div className='fs-6 fw-bold mb-4 mt-4 text-center'>{name}</div>
                    </div>
                </div>
                </div>
            )
        }
        )

        

    
    } 
      else {

        characterCard = "No character card found"
    }
  return (
    <>{characterCard}</>
  )
}

export default Card