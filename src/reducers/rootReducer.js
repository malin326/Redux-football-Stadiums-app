import { combineReducers } from 'redux';
import countryReducer from './Reducers';
export default combineReducers({
    event: countryReducer
})