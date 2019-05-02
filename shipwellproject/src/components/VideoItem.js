import React from "react";
import { Link } from "react-router-dom";
import SaveButton from "./SaveButton";
import "./_VideoItem.scss";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div className="videoitem_container item">
      <div onClick={() => onVideoSelect(video)}>
        <Link to="/Player">
          <img
            alt={video.snippet.title}
            className="ui image"
            src={video.snippet.thumbnails.medium.url}
          />
          <div className="content">
            <div className="header">{video.snippet.title}</div>
          </div>
        </Link>
      </div>
      <SaveButton video={video} />
    </div>
  );
};

export default VideoItem;
