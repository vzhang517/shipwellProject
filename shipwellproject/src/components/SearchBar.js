import React from "react";
import { Link, withRouter } from "react-router-dom";

import "./_SearchBar.scss";

class SearchBar extends React.Component {
  state = { term: "" };

  // Sets state to whatever is being typed in the input
  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  // Function called when form submited, runs onFormSubmit function in parent to set parent state: term
  // Also reroutes when form submitted to root view
  onFormSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>ReactTube</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
        <div className="searchbar_buttons">
          <Link to="/">
            <button className="ui button" onClick={this.onFormSubmit}>
              <i className="fitted search icon" />
            </button>
          </Link>
          <Link to="/Saved">
            <button className="ui button" onClick={this.props.setSavedVideos}>
              <i className="fitted list ul icon" />
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(SearchBar);
