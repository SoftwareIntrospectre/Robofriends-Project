import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
	constructor(){
		super()
		//has a state (describes the app / allows for change)
			//this makes it a "smart component"
				//has class syntax
		this.state = {
			//two states (changes) for app: Robots and Searchfield
			robots: [], //in real life: an empty array because I didn't grab the users yet.
			searchfield: ''
		}
	}

	componentDidMount(){
	//go to this web address
	fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> response.json())
		.then(users=> this.setState( {robots: users}));
	}
	//everytime input changes, we get an event
	onSearchChange = (event) => {

		//assigns the value to Component's searchfield property, based on the input in the textbox
		this.setState({searchfield: event.target.value})
	}

//pass states down here
	render(){

		//grabs the state of the current robot
		//creates an array that filters all array elements on a condition
		//must return true: robot names in lower case in the search box, else don't return it
		const {robots, searchfield} = this.state;
		const filteredRobots = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})

		return !robots.length ?
			<h1>Loading</h1> :
			(
				<div className = 'tc'>
					<h1 className = 'f2'>RoboFriends</h1>
					{/*Every time there's a change on the input in the SearchBox, it lets the App know, 
					   and runs the function to update the state*/}
					<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
				{/*filters the robots to only what's included in the search field's current state*/}
					<CardList robots = {filteredRobots} /> 
				</Scroll>
				</div>
			);
		}
	}


export default App;