import React from 'react';
import './App.scss';
import Header from "../Header/Header";
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

export default class App extends React.Component {
  constructor(props){
    super();
  }
  render(){
    return (
      <div className='wrapper'>    
        <Header />
        <Main />
        <Footer/>
      </div>
    );
  }
}
