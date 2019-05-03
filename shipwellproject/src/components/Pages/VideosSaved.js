import React from "react";
import VideoList from "../VideoList";

const VideosSaved = ({ videos, onVideoSelect }) => {
  return (
    <div>
      <VideoList videos={videos} onVideoSelect={onVideoSelect} />
    </div>
  );
};
export default VideosSaved;
