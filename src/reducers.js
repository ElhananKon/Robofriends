import {robots} from './robots';
import {
	CHANGE_SEARCHFIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED
} from './constants.js'

const initialStateSearch = {
	searchField: ""
}

export const searchRobots = (state= initialStateSearch,action={}) => {
	switch (action.type) {
		case CHANGE_SEARCHFIELD:
			return Object.assign({},state,{searchField: action.payload});
			// return {...state,searchField: action.payload};
		default:
			return state;
	}
}

const initialStateRobots = {
	isPending: false,
	robots: [],
	error: ''
}

export const requestRobots = (state= initialStateRobots,action={}) => {
	switch (action.type) {
			case REQUEST_ROBOTS_PENDING:
				return Object.assign({},state,{isPending: true});
			case REQUEST_ROBOTS_SUCCESS:
			const users_m = action.payload.map( user => {
					return {id:user.id + 10,
				  	name:user.name,
				    username:user.username,
				    email:user.email}});				
				return Object.assign({},state,{robots: [...robots,...users_m], isPending: false});
			case REQUEST_ROBOTS_FAILED:
				return Object.assign({},state,{error: action.payload, isPending: false});

			default:
				return state;
		}
}