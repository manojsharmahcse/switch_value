import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

import './newstyle.scss';

class App extends Component {

  constructor(){
    super();    
      this.state = {
        person: [
         {name: 'Max', age: 28},
          {name: 'Deepak', age: 25},
           {name: 'Manoj', age: 20}
        ]
    }
  }  

  switchNameHandler = (newName) => {

    this.setState({
        person: [
         {name: newName, age: 28},
          {name: 'Manu', age: 25},
           {name: 'Diljeet', age: 20}
        ]
    })

  }


  nameChangeHandler = (event) => {
    this.setState({

       person: [
         {name: 'Gupta', age: 28},
          {name: event.target.value, age: 25},
           {name: 'Manojee', age: 20}
        ]

    })
  }

  render() {
      return (

        <div className="App">

          <h3>Hii, Iam React App</h3>

            <button type="button" onClick={ () => this.switchNameHandler('Rahul')}>Switch Name</button>

            <Person name={this.state.person[0].name} 
            age={this.state.person[0].age}
            click={this.switchNameHandler.bind(this,'Rahul Sharma ')} />

            <Person 
            name={this.state.person[1].name} 
            age={this.state.person[1].age}            
            changed={this.nameChangeHandler}>
                Please enter New Name
            </Person>

            <Person name={this.state.person[2].name} age={this.state.person[2].age} />

        </div>

        );
    }
}

export default App;
