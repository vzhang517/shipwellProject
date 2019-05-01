import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import VideosSearch from "./Pages/VideosSearch";
import VideosPlayer from "./Pages/VideosPlayer";
import VideosSaved from "./Pages/VideosSaved";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit("movie trailers");
  }

  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <BrowserRouter>
          <div>
            <SearchBar onFormSubmit={this.onTermSubmit} />
            <Route
              path="/"
              exact
              render={() => (
                <VideosSearch
                  onVideoSelect={this.onVideoSelect}
                  videos={this.state.videos}
                />
              )}
            />
            <Route
              path="/player"
              exact
              render={() => (
                <VideosPlayer
                  onVideoSelect={this.onVideoSelect}
                  videos={this.state.videos}
                  selectedVideo={this.state.selectedVideo}
                />
              )}
            />
            <Route path="/saved" exact component={VideosSaved} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
