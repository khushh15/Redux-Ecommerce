import { combineReducers } from "redux"
import ItemReducer from "./ItemReducer"
import CartReducer from "./CartReducer"

const RootReducer = combineReducers({
    ItemReducer:ItemReducer,
    CartReducer:CartReducer
})
export default RootReducer