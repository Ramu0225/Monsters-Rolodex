//import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { SearchBox } from './components/search-box/search-box.component'
import { CardList } from './components/card_list/card-list.component'
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state ={
      monsters:[],
      searchField:''
    };

    //this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    //fetch('http://www.omdbapi.com/?i=tt3896198&apikey=79fd7644')
  
    .then(response => response.json())
    .then(user => this.setState({monsters: user}))
    
  }

  


  handleChange = (e) =>{
    this.setState({searchField: e.target.value});
  }

render(){
  
  const {monsters, searchField } = this.state;
  const filteredMonsters = monsters.filter(monster =>
   monster.name.toLowerCase().includes(searchField.toLowerCase()));

  return (
    <div className="App">
      <h1> Monster Roledex </h1>  
    <SearchBox
        placeholder='search monsters' 
        handleChange={this.handleChange}
      />
    
      <CardList monsters={filteredMonsters} />
       
    </div>
  );
  }
}
export default App;
