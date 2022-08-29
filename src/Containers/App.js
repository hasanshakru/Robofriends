import { useState, useEffect } from "react";
import React from "react";
import Cardlist from "../Components/Cardlist";
import Searchbox from "../Components/Searchbox";
import "./App.css";
import Scroll from "../Components/Scroll";

function App() {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchField] = useState("");

useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {setRobots(users)});
},[])

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  }
  const filteredrobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  })
  console.log(robots, searchfield);
  return !robots.length ? 
    <h1> Loading</h1>
   : (
    <div className="tc">
        <h1 className="f1">Robofriends</h1>
        <Searchbox searchChange={onSearchChange} />
        <Scroll>
          <Cardlist robots={filteredrobots} />
        </Scroll>
    </div>
  );
}

// }

export default App;
