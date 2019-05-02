import React from "react";
import VideoList from "../VideoList";
import VideoDetail from "../VideoDetail";
import "./_VideosPlayer.scss";

const VideosPlayer = ({ videos, onVideoSelect, selectedVideo }) => {
  return (
    <div className="videosplayer_container">
      <VideoDetail video={selectedVideo} />
      <VideoList videos={videos} onVideoSelect={onVideoSelect} />
    </div>
  );
};

export default VideosPlayer;
