import React, { Component } from 'react';
import './App.css';
import RepoDetail from './components/RepoDetail';
import ReposList from './components/ReposList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        repo: {},
        repoOwner:{},
        showDetails: false
    }

  }

  handleClick = (repo) => {
      this.setState({repo: repo, repoOwner: repo.owner, showDetails: true})
  };

  render() {
    return (
      <div className="">
          <ReposList repo={this.state.repo} handleClick={this.handleClick}/>
          {this.state.showDetails ? <RepoDetail repo={this.state.repo} repoOwner={this.state.repoOwner}/> : null }
      </div>
    );
  }
}

export default App;
