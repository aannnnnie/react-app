import React, { Component } from 'react';

class RepoDetail extends Component {
    render() {
        return (
            <div className="col">
                <div className="repo-details">
                    <span className="col-title">
                        Details
                    </span>
                    <div className="item-details">
                        <span>Name: {this.props.repo.name}</span>
                    </div>
                    <div className="item-details">
                        <span>Owner name: {this.props.repoOwner.login}</span>
                    </div>
                    <img src={this.props.repoOwner.avatar_url} alt="owner avatar" className="avatar"/>
                </div>
            </div>
        );
    }
}

export default RepoDetail;