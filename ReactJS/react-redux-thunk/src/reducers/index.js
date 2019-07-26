import {combineReducers} from "redux";
import { itemLoading, itemError, itemSuccess} from "./itemsReducers"
export default combineReducers({ itemLoading, itemError, itemSuccess});