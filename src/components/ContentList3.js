import React  from 'react';
import Posters_Third_page from './Posters/posters_Third_page';
import './ContentList1.css';
import {connect} from "react-redux";



const ContentList3 = ( {posters,posters2,posters3} ) => {
  return (
    <div className="ContentList1">
      <div className ="rowd">
        <div class= "col-4">
          {posters2.map((prod) => (
            <Posters_Third_page key = {prod.id} posterData = {prod}/>
         ))}</div>
      <div class= "col-4">
         {posters3.map((prod) => (
           <Posters_Third_page key = {prod.id} posterData = {prod}/>
         ))}</div>
      <div class= "col-4">
        {posters.map((prod) => (
          <Posters_Third_page key = {prod.id} posterData = {prod}/>
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


export default connect(mapStateToProps)(ContentList3) ;
