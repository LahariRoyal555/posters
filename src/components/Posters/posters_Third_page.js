import React from 'react';
import "./Posters.css";

const Posters_Third_page = ({posterData}) => {
  
return(
  <div className="Posters">
    <div className="cards">
      <div class="card" className="card">
        <img   src = {posterData.posterImage} alt=""/>
      </div>
  <div class="card-body">
      <h2 class="card-text" className="card_title"> {posterData.name}</h2>           
     </div>
    </div>
  </div>
)
 }
export default Posters_Third_page;
