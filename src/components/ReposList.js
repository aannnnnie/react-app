import React, {Component} from 'react';
import './styles.css'

class ReposList extends Component {
    constructor (props) {
        super(props);

        this.state = {
            repos: []
        }
    }

    componentWillMount() {
        fetch('//api.github.com/orgs/octokit/repos')
            .then(response => response.json())
            .then(repos => this.setState({ repos }));
    }

    render(){
        console.log(this.state);
        return(
            <nav className="col">
                <div className="col-title">Repository name</div>
                {
                    this.state.repos.map(repo => (
                        <a
                            className="item"
                            key={repo.name}
                            href="">{repo.name}
                        </a>
                    ))
                }
            </nav>
        )
    }
}

export default ReposList;