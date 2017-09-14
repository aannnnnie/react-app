import React, {Component} from 'react';
import './styles.css'

class ReposList extends Component {
    constructor (props) {
        super(props);

        this.state = {
            repos: [],
            repoOwner: {owner:[]}
        }
    }

    componentWillMount() {
        fetch('//api.github.com/orgs/octokit/repos')
            .then(response => response.json())
            .then(repos => this.setState({ repos, repoOwner: repos[0].owner}));
    }

    handleClick = (ev,index) => {
        ev.preventDefault();
        this.props.handleClick(this.state.repos[index])
    };
    
    render(){
        return(
            <nav className="col">
                <div className="col-title">Repository name</div>
                {
                    this.state.repos.map((repo, index) => (
                        <div key={repo.name}>
                            <a
                                className="item"
                                onClick={(ev) => this.handleClick(ev, index)}
                                href="">{repo.name}
                            </a>
                        </div>

                    ))
                }
            </nav>
        )
    }
}

export default ReposList;