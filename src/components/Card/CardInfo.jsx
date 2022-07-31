import React, { useEffect , useState} from 'react'
import {useParams} from "react-router-dom"
import "../Card/Card.styles.scss"


const CardInfo = () => {

  let { id } = useParams();

  let [fetchedData, updateFetchedData] = useState([]);
  let { name, location, origin, gender, image, status, species} = fetchedData;
  

  let api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    
    <div className="container d-flex justify-content-center mb-5 mt-3">
      <div className="d-flex flex-column gap-3">
      

        <img className="img-fluid card mb-4" src={image} alt="" />
      
        <div className="content ">
          <div className="">
            <span className="fw-bold text-info ">Name : </span>
            {name}
            </div>
            <div className="">
            <span className="fw-bold ">Species: </span>
            {species}
          </div>
          <div className="">
            <span className="fw-bold text-info">Gender : </span>
            {gender}
          </div>
          <div className="">
            <span className="fw-bold ">Origin: </span>
            {origin?.name}
          </div>
      
          <div className="">
            <span className="fw-bold text-info"> Status: </span>
            {status}
          </div>

          <div className="">
            <span className="fw-bold"> Current Location: </span>
            {location?.name}
         </div>
     
          
    
          <div className="">
            <span className="fw-bold">Episodes: </span>
          </div>
        </div>
      </div>
    </div>
  );
};


export default CardInfo