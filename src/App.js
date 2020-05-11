import React from 'react'
import CardList from './components/CardList.js'
import { robots } from './robots'
import SearchBox from './components/SearchBox'
import { Component } from 'react'
import MediaCard from './components/MediaCard'
import Header from './components/Header'





class App extends Component {
    constructor() {
        super()

        this.state = {
            robots: [],
            searchfield:''
        }
    }

    componentDidMount(){
        fetch('').then(response => response.json())
        .then(user => this.setState({ robots: users })
        )
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
        
    }
  
    
    render(){
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toString().toLowerCase().includes(this.state.searchfield.toString().toLowerCase())
        })
    return (
        <div className='tc bground'> 
            <Header />
            <SearchBox searchChange = {this.onSearchChange}/>
            <CardList robots = { filteredRobots }  />
            
        </div>
     )
    }
    
}

export default App;