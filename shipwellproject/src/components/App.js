import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import VideosSearch from "./Pages/VideosSearch";
import VideosPlayer from "./Pages/VideosPlayer";
import VideosSaved from "./Pages/VideosSaved";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";

class App extends React.Component {
  state = { videos: [], selectedVideo: null, savedVideos: [] };

  // Display some videos after component renders
  // Also grab stored video data from local storage
  componentDidMount() {
    this.onTermSubmit("planet earth");
    this.setSavedVideos();
  }

  // Setting state videos to items from reponse
  // Setting state selectedvideo to the first item we get back
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

  // Function for setting the selectedvideo
  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  // Grabbing all stored video data from local storage
  setSavedVideos = () => {
    let values = [],
      keys = Object.keys(localStorage),
      i = keys.length;

    while (i--) {
      let currentVal = JSON.parse(localStorage.getItem(keys[i]));
      values.push(currentVal);
    }

    this.setState({ savedVideos: values });
  };

  render() {
    return (
      <div className="ui container">
        <BrowserRouter>
          <div>
            <SearchBar
              onFormSubmit={this.onTermSubmit}
              setSavedVideos={this.setSavedVideos}
            />
            <Route
              path="/"
              exact
              render={() => (
                <VideosSearch
                  onVideoSelect={this.onVideoSelect}
                  videos={this.state.videos}
                  selectedVideo={this.state.selectedVideo}
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
            <Route
              path="/saved"
              exact
              render={() => (
                <VideosSaved
                  onVideoSelect={this.onVideoSelect}
                  videos={this.state.savedVideos}
                  selectedVideo={this.state.selectedVideo}
                />
              )}
            />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
