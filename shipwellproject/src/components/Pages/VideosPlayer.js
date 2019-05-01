import React from "react";
import VideoList from "../VideoList";
import VideoDetail from "../VideoDetail";

const VideosPlayer = ({ videos, onVideoSelect, selectedVideo }) => {
  return (
    <div>
      <VideoDetail video={selectedVideo} />
      <VideoList videos={videos} onVideoSelect={onVideoSelect} />
    </div>
  );
};

export default VideosPlayer;
