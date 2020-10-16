import {
	CHANGE_SEARCHFIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED
} from './constants.js'

export const setSearchField = (text) => ({
	type: CHANGE_SEARCHFIELD,
	payload: text
})

export const requestRobots = () => async (dispatch)=> {
	dispatch({type: REQUEST_ROBOTS_PENDING});
	try {
		const data = await getUsers();
		dispatch({type: REQUEST_ROBOTS_SUCCESS,payload:data});
   } catch (err) {
   	dispatch({type: REQUEST_ROBOTS_FAILED, payload: err});
   }
	// fetch('https://jsonplaceholder.typicode.com/users')
	// .then(response => response.json())
	// .then(data => dispatch({type: REQUEST_ROBOTS_SUCCESS,payload:data}))
	// .catch(error => dispatch({type: REQUEST_ROBOTS_FAILED, payload: error}))
}

 const getUsers =  async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonData = await response.json();
    console.log(jsonData);
    return jsonData;
 };