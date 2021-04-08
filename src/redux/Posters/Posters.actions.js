import * as actionTypes from "./Posters.types";
export const displayPoster = (posterName , posterImage) => {
   return{
     type: actionTypes.DISPLAY_POSTERS,
     payload:{
       name : posterName,
       image : posterImage
   }
      }
    }
    export const filterPoster = (posterName , posterImage) =>{
      return {
        type:actionTypes.FILTER_POSTERS,
        payload:{
          name : posterName,
          image : posterImage
        }
      }
    }
    export const loadNextpage = (posterName , posterImage) =>{
      return{
        type: actionTypes.LOAD_NEXTPAGE_POSTERS,

        payload:{
          name : posterName,
          image : posterImage

        }
            }
    }