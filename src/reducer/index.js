import { combineReducers } from "redux";
import { calendarReducer } from "../reducer/calendarReducer";

const rootReducer = combineReducers({
    calendarReducer
});

export default rootReducer;