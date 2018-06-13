import {combineReducers} from "redux";
import {initialState} from "../store/AppStore";

const appReducer = (state = initialState, action: any) => {
    if(action.type === "LoggedIn") {
        return "";
    }
    return state
};

const isLogging = (state = {}, action: any) => {
    if(action.type === "LoggedIn"){
        return true;
    }
    return state;
}

const reducers = combineReducers({isLogging});
export default reducers;