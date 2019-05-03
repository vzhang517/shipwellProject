import React from "react";
import VideoList from "../VideoList";
import VideoDetail from "../VideoDetail";
import "./_VideosPlayer.scss";

const VideosPlayer = ({ videos, onVideoSelect, selectedVideo }) => {
  return (
    <div className="videosplayer_container">
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList videos={videos} onVideoSelect={onVideoSelect} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideosPlayer;
