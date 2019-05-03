import React from "react";

import VideoList from "../VideoList";
import VideoDetail from "../VideoDetail";
import "./_VideosPlayer.scss";

const VideosPlayer = ({ videos, onVideoSelect, selectedVideo }) => {
  return (
    <div className="videosplayer_container">
      <div className="videosplayer_player">
        <VideoDetail video={selectedVideo} />
      </div>
      <div className="videosplayer_list">
        <VideoList videos={videos} onVideoSelect={onVideoSelect} />
      </div>
    </div>
  );
};

export default VideosPlayer;
