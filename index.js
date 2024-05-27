import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class GithubExplorer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            repositories: [],
            repository: null,
            user: null
        };
        this.searchRepositories = this.searchRepositories.bind(this);
        this.viewRepository = this.viewRepository.bind(this);
        this.viewUser = this.viewUser.bind(this);
    }

    searchRepositories(query) {
        axios.get(`https://api.github.com/search/repositories?q=${query}`)
            .then(response => {
                this.setState({
                    repositories: response.data.items
                });
            })
            .catch(error => {
                console.error(error);
            });
    }

    viewRepository(repository) {
        this.setState({
            repository: repository
        });
    }

    viewUser(username) {
        axios.get(`https://api.github.com/users/${username}`)
            .then(response => {
                this.setState({
                    user: response.data
                });
            })
            .catch(error => {
                console.error(error);
            });
    }

    render() {
        return null; // or whatever you want to return
    }
}

ReactDOM.render(<GithubExplorer />, document.getElementById("root"));
