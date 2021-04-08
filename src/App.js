
import './App.css';
import ContentList1 from './components/ContentList1';

import {
  BrowserRouter as Router,
  Switch,
  Route,
 } from "react-router-dom";
 import ContentList2 from './components/ContentList2';
 import ContentList3 from './components/ContentList3';
 import Navbar2 from "./components/Navbar/Navbar2";
 import Navbar3 from "./components/Navbar/Navbar3";
 import Navbar1 from "./components/Navbar/Navbar1";

function App() {
  return (
 <div className="App">
  
  <Router>
      <div className="app_body">
         <Switch>
          <Route exact path ="/Thirdpage">
               <Navbar3/>
               <ContentList3 />
          </Route>
         <Route exact path ="/Secondpage">
               <Navbar2/>
               <ContentList2 />
         </Route>
          <Route exact path="/">
               <Navbar1/>
               <ContentList1 />
          </Route>
        </Switch>
      </div>
  </Router>
   
 </div>
  );
}

export default App;
