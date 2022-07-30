
import React, { useState, useEffect } from "react";

import pic from '../../assets/pic.png'
import Card from "../../components/Card/Card";
import Pagination from "../../components/Pagination/Pagination";
import Search from "../../components/Search-Bar/Search";


const Home  = () =>{


    let [pageNum, setPageNum ] = useState(1)     // to change page numbers through pagination
    let [fetchedData, setFetchedData] = useState([]) //to save the fetched data
    let [search , setSearch] = useState(""); // used to search the characters in input fields
    let {info, results} = fetchedData; // destructuring since we are getting two data from the api (info and results)
  
  
    let api= `https://rickandmortyapi.com/api/character/?page=${pageNum}&name=${search}`;
  
   
  
    useEffect(() => {     // fetching data from the rick and morty api
      
      (async function () {
  
        let data = await fetch(api).then((response) => response.json());
        setFetchedData(data);  // to save the fetched data using state
      })();
      
  
    },[api]);

    return(

      <div className="App"> 
      
    
       {/* ricky and morty top heading image positioned centered */}
      <div className="col-md-8 offset-md-3 my-4">   
      <img src ={pic} alt="ricky and morty" width="600" height="100"/>
      </div>
  
      <Search setSearch = {setSearch}/>
  {/* container  */}
     <div className="container">
  
     <div className="row">
      {/* col -20 to maximixe the grid */}
     <div className="col-20 ">
              <div className="row">
                <Card  page="/" results={results} />
              </div>
            </div>
          </div>
        </div>
        
        <Pagination pageNumber={pageNum}  setPageNum={setPageNum}/>  
        </div>
        
    );
  }
  
  export default Home