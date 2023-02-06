import React from 'react';
import './App.scss';
import Header from "../Header/Header";

export default class App extends React.Component {
  constructor(props){
    super();
  }
  render(){
    return (
      <div >    
        <Header />
      </div>
    );
  }
}
