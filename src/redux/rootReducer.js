import {combineReducers} from "redux";
import posterReducer1 from "./Posters/Posters.reducer1";
import posterReducer2 from "./Posters/Posters.reducer2";
import posterReducer3 from "./Posters/Posters.reducer3";
const rootReducer = combineReducers({poster: posterReducer1,
poster2 :posterReducer2,
poster3 :posterReducer3
});
export default rootReducer;