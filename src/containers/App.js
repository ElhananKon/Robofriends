import React,{Component} from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import Searchbox from '../components/SearchBox';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css'

class App extends Component {
	constructor(){
		super();
		this.state = {
				robots: [],
				searchField: ""
		};
	}

	onSearchChange = (event) => {
		console.log(event.target.value);
		this.setState({searchField:event.target.value });
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({robots:users}));
	}

	render(){
		const {robots,searchField} = this.state;
		const filteredList = robots.filter( robot => {
		return robot.name.toLowerCase().includes(searchField.toLowerCase());
	});
		return ((!robots.length) ?
			 <h1 className='tc'>Loading...</h1> :
				<div className='tc'>
				<h1 className='f2'>Robofriends</h1>
				<Searchbox searchChange={this.onSearchChange}/>
				<Scroll>
					<ErrorBoundry>
						<CardList robots = {filteredList}/>
					</ErrorBoundry>
				</Scroll>
				</div>
			);
	}
};
export default App;