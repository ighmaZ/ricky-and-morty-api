import React  from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import {Routes, Route} from "react-router-dom";
import CardInfo from "./components/Card/CardInfo";
import Home from "./components/Home/Home";


function App() {


 

  return (

    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/:id" element={<CardInfo />} />
    </Routes>
  )}

 
  
 
export default App;
