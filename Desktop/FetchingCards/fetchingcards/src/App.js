import './App.css';
import React , {useState,useEffect} from "react";
import Search from   "./Search";
function App() {
  const[cards, setCards] = useState([]);
  const[visible, setVisible] = useState(10);
  
 
const loadMoreItems = () =>{
   setVisible((prevValue) => prevValue + 5);
}


   useEffect(() => {
      getData();

       },[]);
       

    function getData(){

      fetch(" https://jsonplaceholder.typicode.com/posts ")
      .then((res) => res.json())
      .then((data) =>  setCards(data));
 
    }

   return (
    <div className="App">
    <Search/>
    <div className="container">
    {cards.slice(0,visible).map((item) => {
    return(
      <div className="card">
       <div className="id">
        
       </div>
       <p>{item.body}</p>
</div>)
    })}
    </div>
  
      <button onClick={loadMoreItems} className="button">Load More</button>
    </div>
  );
}

export default App;
