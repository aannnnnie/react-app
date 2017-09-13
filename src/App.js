import React, { Component } from 'react';
import './App.css';
/*import RepoDetail from './components/RepoDetail';*/
import ReposList from './components/ReposList';

class App extends Component {
  render() {
    return (
      <div className="">
          <ReposList/>{/*
          <RepoDetail/>*/}
      </div>
    );
  }
}

export default App;
