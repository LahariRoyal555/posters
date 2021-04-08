import * as actionTypes from "./Posters.types";
import poster4 from "./images/poster4.jpg";
import poster5 from "./images/poster5.jpg";
import poster6 from "./images/poster6.jpg";
const INITIAL_STATE ={
  posters:[
    
      
          
            {   id :1,
              name : "Rear window",
              posterImage: poster5
            },
            {  
              id :2,
              name : "The Birds",
              posterImage: poster6
            },
            {   

              id :3,
              name : "Family Pot",
              posterImage: poster5
            },
            {
              id :4,
              name : "Family Pot",
              posterImage: poster4
            },
            {

              id :5,
              name : "Rear window",
              posterImage: poster6
            },
            {
              id :6,
              name : "The Birds",
              posterImage : poster6
            },
            {
              id :7,
              name : "Family pot",
              posterImage: poster5
            },
            {  id :8,
              name : "Rear window",
              posterImage: poster4
            },
            {
              id :9,
              name : "Family Pot",
              posterImage: poster4
            },
            {
              id :10,
              name : "The Birds",
              posterImage: poster5
            },
            {
              id :11,
              name : "Rear window",
              posterImage: poster6
            },
            {
              id :12,
              name : "Rear Window",
              posterImage: poster6
            },
            {
              id :13,
              name : "Family Pot",
              posterImage: poster5
            },
            {
              id :14,
              name : "Family Pot",
              posterImage: poster4
            },
            {
              id :15,
              name : "Rear Window",
              posterImage: poster6
            },
            
    
  ],
  filterPosters :[], 

}

const posterReducer2 = (state = INITIAL_STATE ,action) =>{
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
export default posterReducer2;