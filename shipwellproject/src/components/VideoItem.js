import React from "react";
import { Link } from "react-router-dom";
import SaveButton from "./SaveButton";
import "./_VideoItem.scss";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div className="videoitem_container">
      <Link to="/Player">
        <div onClick={() => onVideoSelect(video)} className="videoitem item">
          <img
            alt={video.snippet.title}
            className="ui image"
            src={video.snippet.thumbnails.medium.url}
          />
        </div>
      </Link>
      <div className="content">
        <div className="itemtext">{video.snippet.title}</div>
      </div>
      <SaveButton video={video} />
    </div>
  );
};

export default VideoItem;
