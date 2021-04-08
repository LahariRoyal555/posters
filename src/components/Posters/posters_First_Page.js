import React,{useState} from 'react';
import "./Posters.css";


import "./Posters.css";
const Posters = ({posterData}) => {

  const [input , setInput] = useState("");

return(
  

<div className="Posters">
  <div className="cards">
    <div class="card" className="card">
   <img   src = {posterData.posterImage} alt=""/>
    </div>
   <div class="card-body">
    <h2 class="card-text"className="card_title"> {posterData.name}</h2>           
   </div>
 </div>
</div>

)}
{/*const useStyles = makeStyles((theme) => ({
  root: {
    display: 'inline-flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: blueGrey
  },
  
}));

 const Posters = ({posterData}) => {
  const classes = useStyles();
  const [input , setInput] = useState("");

return(
  
 
<div className={classes.root}>
<GridList className = "Posters">
  
<img   src = {posterData.posterImage} alt=""  className="PosterImage"/>

<h2 className = "PosterName"> {posterData.name}</h2>           


</GridList>

</div>

)

 }*/}

export default Posters
