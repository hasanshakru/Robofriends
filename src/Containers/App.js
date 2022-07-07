import React, { Component } from "react"
import Cardlist from "../Components/Cardlist"
import Searchbox from "../Components/Searchbox"
import './App.css'
import Scroll from '../Components/Scroll'


class App extends Component {

    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {this.setState({ robots: users })});
    }
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })

    }

    render() {
        const {robots, searchfield}= this.state;
        const filteredrobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return !robots.length ? 
            <h1> Loading</h1> :
            (
                <div className="tc">
                    <React.StrictMode>
                        <h1 className="f1">Robofriends</h1>
                        <Searchbox searchChange={this.onSearchChange} />
                       <Scroll>
                        <Cardlist robots={filteredrobots} />
                        </Scroll>
                    </React.StrictMode>
                </div>
            );
        }
    }


export default App;