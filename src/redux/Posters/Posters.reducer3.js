import * as actionTypes from "./Posters.types";
import poster7 from "./images/poster7.jpg";
import poster8 from "./images/poster8.jpg";
import poster9 from "./images/poster9.jpg";
const INITIAL_STATE ={
  posters:[
    
      
          
            {   id :1,
              name : "The Birds",
              posterImage: poster9
            },
            {  
              id :2,
              name : "Rear Window",
              posterImage: poster8
            },
            {   

              id :3,
              name : "Family Pot",
              posterImage: poster7
            },
            {
              id :4,
              name : "Family Pot",
              posterImage: poster9
            },
            {

              id :5,
              name : "Rear Window",
              posterImage: poster9
            },
            {
              id :6,
              name : "The Birds",
              posterImage : poster8
            },
            {
              id :7,
              name : "Rear Window",
              posterImage: poster7
            },
            {  id :8,
              name : "The Birds",
              posterImage: poster9
            },
            {
              id :9,
              name : "Family Pot",
              posterImage: poster8
            },
            {
              id :10,
              name : "The Birds",
              posterImage: poster7
            },
            {
              id :11,
              name : "The Birds",
              posterImage: poster9
            },
            {
              id :12,
              name : "Rear Window",
              posterImage: poster9
            },
            {
              id :13,
              name : "Family Pot",
              posterImage: poster8
            },
            {
              id :14,
              name : "Family Pot",
              posterImage: poster9
            },
            {
              id :15,
              name : "Rear Window",
              posterImage: poster7
            },
            {
              id :14,
              name : "Family Pot",
              posterImage: poster9
            },
            {
              id :15,
              name : "Rear Window",
              posterImage: poster7
            }
            
    
    
  ],//{postername , posterimage}
  filterPosters :[], // {filterpostername, filterposterimage}

}

const posterReducer3 = (state = INITIAL_STATE ,action) =>{
switch(action.type){
   case actionTypes.DISPLAY_POSTERS:
     return {};
    case actionTypes.FILTER_POSTERS:
      return {};
      case actionTypes.LOAD_NEXTPAGE_POSTERS:
        return {};
        default:
          return state;

}


}
export default posterReducer3;