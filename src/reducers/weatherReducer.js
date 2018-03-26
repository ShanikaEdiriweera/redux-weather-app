import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action){
    switch (action.type){
        case FETCH_WEATHER:
            // return state.push(action.payload.data) // This is wrong - mutating the state
            return [action.payload.data, ...state] // return a new instance of state
            // can use state.concat([action.payload.data])
    }    
    return state
}