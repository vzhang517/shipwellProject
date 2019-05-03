import React from "react";
import VideoList from "../VideoList";
import "./_VideosSaved.scss";

const VideosSaved = ({ videos, onVideoSelect }) => {
  return (
    <div className="videossaved_container">
      <VideoList videos={videos} onVideoSelect={onVideoSelect} />
    </div>
  );
};
export default VideosSaved;
