import React, { useEffect , useState} from 'react'
import {useParams} from "react-router-dom"
import "../Card/Card.styles.scss"


const CardInfo = () => {

  let { id } = useParams();   

  let [fetchChar, setFetchedChar] = useState([]); // saves fetched character from the api
  let [fetchLocation, setFetchedLocation] = useState([]);   // saves location from the api
  let { name, location, origin, gender, image, status, species} = fetchChar;
  

  let CharApi = `https://rickandmortyapi.com/api/character/${id}`; // id since we are supposed to get to id page using useParam hook
  let LocationApi = `https://rickandmortyapi.com/api/location/${id}`; 

  useEffect(() => {
    (async function () {
      let data = await fetch(CharApi).then((res) => res.json());
      setFetchedChar(data);
    })();
  }, [CharApi]);

  useEffect(() => {
    (async function () {
      let data = await fetch(LocationApi).then((res) => res.json());
      setFetchedLocation(data);
    })();
  }, [LocationApi]);





  return (
    
    <div className="container d-flex justify-content-center mb-5 mt-3">
      <div className="d-flex flex-column gap-3">
      

        <img className="img-fluid card mb-4" src={image} alt="" />
      
        <div className="content ">
          <div className="mb-5">
            <h3 className="fw-bold text-center ">Basic Info</h3>
          
            </div>
            <div className="">
            <span className="fw-bold text-warning">Name: </span>
            {name}
          </div>
            <div className="">
            <span className="fw-bold text-info">Species: </span>
            {species}
          </div>
          <div className="">
            <span className="fw-bold text-info">Gender : </span>
            {gender}
          </div>
        
          
      
          <div className="mb-5">
            <span className="fw-bold text-info"> Status: </span>
            {status}
          </div>

           {/* location info  */}
     
          <div className="">
            <h3 className="fw-bold text-center mb-4">Location Info</h3>
          
            </div>

            <div className="">
            <span className="fw-bold text-warning">Origin: </span>
            {origin?.name}
          </div>
      
          <div className="">
            <span className="fw-bold text-success"> Current Location: </span>
            {location?.name}
         </div>
         <div className="">
            <span className="fw-bold text-success"> Location Type: </span>
            {fetchLocation.type}
         </div>
          <div className="">
            <span className="fw-bold text-success">  Name: </span>
            {fetchLocation.name}
         </div>

          <div className="">
            <span className="fw-bold text-success"> Dimension: </span>
            {fetchLocation.dimension}
         </div>
        
        </div>
      </div>
    </div>
  );
};


export default CardInfo