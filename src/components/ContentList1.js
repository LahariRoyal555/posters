import React  from 'react';
import Posters from "./Posters/posters_First_Page";
import './ContentList1.css';
import {connect} from "react-redux";



const ContentList1 = ( {posters,posters2,posters3} ) => {
 return (
    
  <div className="ContentList1">
     <div className="rowd">
  
   <div class= "col-4" >
         {posters.map((prod) => (
            <Posters key = {prod.id} posterData = {prod} />
               ))} </div>
   <div class= "col-4" >
        {posters2.map((prod) => (
           <Posters key = {prod.id} posterData = {prod}/>
               ))}</div>
  <div class= "col-4" >
       {posters3.map((prod) => (
            <Posters key = {prod.id} posterData = {prod}/>
               ))}</div> 
  </div>
    </div>
  )
}
const mapStateToProps = (state) =>{
  return{
    posters: state.poster.posters,
    posters2 :state.poster2.posters,
    posters3 : state.poster3.posters
};
};


export default connect(mapStateToProps)(ContentList1) ;
