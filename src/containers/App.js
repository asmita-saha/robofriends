import React from 'react';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import {robots} from '../robots';
import './App.css';
import Scroll from '../components/Scroll';


class App  extends React.Component {
    constructor(){
        super()
        this.state ={
            robots: [],
            searchfields: '' 
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(Response => Response.json())
            .then(users=> this.setState({robots: robots}));
    }

    onSearchChange =(event) => {
        this.setState({searchfields: event.target.value})
    }
    
    render(){
        const { robots, searchfields } = this.state;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfields.toLowerCase());
        })
        if (!robots.length){
            return<h1>Loading...</h1>
        }else{
            return(
            <div className= 'tc'>
            <h1 className='f1'>RoboFriends</h1>
            <Searchbox searchchange={this.onSearchChange}/>
            <Scroll>
                <CardList robots ={filteredRobots}/>
            </Scroll>
            
            </div>
            );
        }
    }
}

export default App;