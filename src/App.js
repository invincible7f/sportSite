import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import React from 'react';
import Main from './Main/Main'

class App extends React.Component {
  render(){
  return (
    <div className="App">
      < Navbar/>
        <Main/>
    </div>
  );
}
}
export default App;
