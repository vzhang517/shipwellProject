import React from "react";
import { Link } from "react-router-dom";
import "./_SearchBar.scss";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);
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
          <Link to="/">
            <button className="ui button" type="submit">
              <i className="fitted search icon" />
            </button>
          </Link>
          <Link to="/Saved">
            <button className="ui button" onClick={this.setSavedVideos}>
              <i className="fitted list ul icon" />
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

export default SearchBar;
