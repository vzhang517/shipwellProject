import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import VideosSearch from "./Pages/VideosSearch";
import VideosPlayer from "./Pages/VideosPlayer";
import VideosSaved from "./Pages/VideosSaved";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";

class App extends React.Component {
  onTermSubmit = term => {
    youtube.get("/search", {
      params: {
        q: term
      }
    });
  };

  render() {
    return (
      <div className="ui container">
        <BrowserRouter>
          <div>
            <SearchBar onFormSubmit={this.onTermSubmit} />
            <Route path="/" exact component={VideosSearch} />
            <Route path="/player" exact component={VideosPlayer} />
            <Route path="/saved" exact component={VideosSaved} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
