import * as actionTypes from "./Posters.types";
import poster1 from "./images/poster1.jpg";
import poster2 from "./images/poster2.jpg";
import poster3 from "./images/poster3.jpg";



const INITIAL_STATE ={
  posters:[
    
     
        {   id :1,
          name : "Family Pot",
          posterImage: poster1
        },
        {  
          id :2,
          name : "Rear Window",
          posterImage: poster2
        },
        {   

          id :3,
          name : "The Birds",
          posterImage: poster3
        },
        {
          id :4,
          name : "Family Pot",
          posterImage: poster2
        },
        {

          id :5,
          name : "Rear window",
          posterImage: poster1
        },
        {
          id :6,
          name : "The Birds",
          posterImage : poster3
        },
        {
          id :7,
          name : "Rear Window",
          posterImage: poster3
        },
        {  id :8,
          name : "The Birds",
          posterImage: poster2
        },
        {
          id :9,
          name : "Family Pot",
          posterImage: poster1
        },
        {
          id :10,
          name : "The Birds",
          posterImage: poster1
        },
        {
          id :12,
          name : "The Birds",
          posterImage: poster1
        },
        {
          id :13,
          name : "Rear Window",
          posterImage: poster2
        },
        {
          id :14,
          name : "Family Pot",
          posterImage: poster3
        },
        {
          id :15,
          name : "The Birds",
          posterImage: poster2
        },

        {
          id :16,
          name : "Rear Window",
          posterImage: poster1
        },
      
           
    
    
  ],//{postername , posterimage}
  filterPosters :[], // {filterpostername, filterposterimage}

}

const posterReducer1 = (state = INITIAL_STATE ,action) =>{
switch(action.type){
   case actionTypes.DISPLAY_POSTERS:
     return {};
    case actionTypes.FILTER_POSTERS:
      //filter the posters based on useractions
       return {};
    case actionTypes.LOAD_NEXTPAGE_POSTERS:
        return {};
    default:
          return state;

}


}
export default posterReducer1;