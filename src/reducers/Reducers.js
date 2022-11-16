const initial_state = {
    countries: [], 
    error:null
}
const Reducers = (state = initial_state, action) => {
    switch (action.type ) {
        case "COUNTRIES_DATA":
        return {
            ...state,
            countries: action.payload
        }
        case "ERR_DATA":
            return {
                ...state,
                error: action.payload
            }
            default:
                return state;
    } 
    
}

export default Reducers;