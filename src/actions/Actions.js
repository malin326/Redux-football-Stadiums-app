import { COUNTRIES_DATA ,ERR_DATA} from './index.js';
import axios from 'axios';
export const Actions = (region) => (dispatch) => {
    axios.get("https://restcountries.com/v3.1/region/"+region)
        .then(res => {
            console.log("data", res.data)
            dispatch(get(res.data));
        })
        .catch((error) =>{
            console.log("data",error.data)
            alert("404 not found", error)
            dispatch(fetchError());
        });
}
const get = (countries) => {
    return {
        type: COUNTRIES_DATA,
        payload: countries
    }
}
const fetchError = (error) =>{
    return {
        type: ERR_DATA,
        payload:error
    }
}