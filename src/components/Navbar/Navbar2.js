import React from 'react'

import "./Navbar.css";

import SearchIcon from "@material-ui/icons/Search";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {useHistory} from "react-router-dom";


function Navbar2() {
  const history = useHistory();
  const exit =() =>{
    history.replace('/');
  };
  const move = () =>{
    history.push('/ThirdPage');
  }
  return (
    <div className="header">
      <ArrowBackIcon className="header__BackIcon" onClick={exit} />
       <div className="header__search">
         <input className="header__searchInput" type="text" placeholder="Romantic Comedy"/>
         <SearchIcon className="header__searchIcon" />
      </div>
  
    <ArrowForwardIcon className="header__ForwardIcon" onClick={move} />
    </div>
  )
}

export default Navbar2;
