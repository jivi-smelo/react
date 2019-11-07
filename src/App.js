import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car'

class App extends Component {

  state = {
    cars: [
      { name:'Ford', year: 2018},
      { name:'Audi', year: 2016},
      { name:'Mazda', year: 2010}
    ],
    pageTitle: 'React components'
  }

  changeTitleHandker = (newtTitle) => {


    this.setState({
      pageTitle:newtTitle
    })
  }

  handleInput=(event)=>{
      console.log('Changed', event.target.value)
  }

  render() {

    const divStyle={
      textAlign:'center'
    }

    const cars= this.state.cars;

// на сайте реакт есть описание всех событий
// метод с bind более предпочтительный
    return (

         <div style={divStyle}>
            <h1>{this.state.pageTitle}</h1>
             <input type="text" onChange={this.handleInput}/>

           <button onClick={this.changeTitleHandker.bind(this, 'changed')}>Change title</button>
             <Car
               name={cars[0].name}
               year={cars[0].year}
               onChangeTitle={this.changeTitleHandker.bind(this, cars[0].name)}
           />
           <Car
               name={cars[1].name}
               year={cars[1].year}
               onChangeTitle={()=> this.changeTitleHandker(cars[1].name)}
           />
           <Car
               name={cars[2].name}
               year={cars[2].year}
               onChangeTitle={()=> this.changeTitleHandker(cars[2].name)}
           />
         </div>



    );

  }
}

export default App;
