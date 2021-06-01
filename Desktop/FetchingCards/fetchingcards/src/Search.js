import React,{useState,useEffect} from 'react'
import axios from "axios";
import "./Search.css";

function Search() {
const[post , setPost] = useState([]);
const[id , setId] =useState(1);
const[buttonClickId , setButtonClickId] = useState(1);

const handleClick = () => {
  setButtonClickId(id)
}
useEffect(() => {
  axios.get(` https://jsonplaceholder.typicode.com/posts/${buttonClickId} `)
  .then(res =>{
     console.log(res)
    setPost(res.data)
  })
  .catch(err => {
    console.log(err);
  })

},[buttonClickId])
  return (
    <div >
    <input type="text" value={id} onChange= {e => setId(e.target.value)} className="input"/>
    <button type="button" onClick={handleClick} className="search">Search By Id</button>
    <div className="container">
    <div className="cardd">
    <div className="title"><h3>TITLE : </h3>{post.title}</div>
    <div className="body"><h5> BODY :</h5>{post.body}</div>
    </div>
    </div>
    </div>
  )
}

export default Search
