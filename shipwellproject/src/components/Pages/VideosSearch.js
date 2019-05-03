import React from "react";

import VideoList from "../VideoList";
import "./_VideosSearch.scss";

const VideosSearch = ({ videos, onVideoSelect }) => {
  return (
    <div className="videossearch_container">
      <VideoList videos={videos} onVideoSelect={onVideoSelect} />
    </div>
  );
};

export default VideosSearch;
