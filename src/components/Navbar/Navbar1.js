import React,{useState} from 'react'
import "./Navbar.css";
import SearchIcon from "@material-ui/icons/Search";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {useHistory} from "react-router-dom";

function Navbar1() {
  const[input , setInput] = useState("");
   const history = useHistory();
    const exit =() =>{
    history.replace('/');
  };
    const move = () =>{
    history.replace('/secondpage');
   };
 const search =() =>{
  history.replace('/secondpage');
 }
  
  return (
    <div className="header">
      <ArrowBackIcon className="header__BackIcon" onClick={exit} />
        <div className="header__search">
           <input className="header__searchInput" type="text" placeholder="Romantic Comedy" onChange={(e) => setInput(e.target.value)}/>
            <SearchIcon className="header__searchIcon" onclick ={search} />
        </div>
      <ArrowForwardIcon className="header__BackIcon" onClick={move} />
    
     </div>
      )
}


export default Navbar1;
