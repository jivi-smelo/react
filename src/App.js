import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car'

class App extends Component {
  render() {

    const divStyle={
      textAlign:'center'
    }
// если передается объект то только через скобки name={'Ford'} строку можно name="Audi"
    return (

         <div style={divStyle}>
            <h1>Hello world!</h1>
           <Car name={'Ford'} year={2018}/>
           <Car name="Audi" year={2016}>
             <p style={{color: 'red'}}>COLOR</p>
           </Car>
           <Car name="Mazda" year={2010}/>
         </div>



    );

  }
}

export default App;
