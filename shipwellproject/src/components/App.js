import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import VideosSearch from "./Pages/VideosSearch";
import VideosPlayer from "./Pages/VideosPlayer";
import VideosSaved from "./Pages/VideosSaved";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";

class App extends React.Component {
  state = { videos: [], selectedVideo: null, savedVideos: [] };

  componentDidMount() {
    this.onTermSubmit("planet earth");
  }

  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });

    console.log(response.data.items);

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
    console.log(video);
  };

  setSavedVideos = () => {
    let values = [],
      keys = Object.keys(localStorage),
      i = keys.length;

    while (i--) {
      values.push(localStorage.getItem(keys[i]));
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
