import {combineReducers} from "redux";
import {initialState} from "../store/AppStore";

const appReducer = (state = initialState, action: any) => {
    if(action.type) {
        return "";
    }
    return state
};

const reducers = combineReducers({app: appReducer});
export default reducers;