import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleWare from "redux-thunk";
import ContactsReducer from "./contacts_reducer";
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    contactsPage: ContactsReducer,
    form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleWare)));

export default store;