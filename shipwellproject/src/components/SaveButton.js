import React from "react";

class SaveButton extends React.Component {
  onSaveClick = event => {
    console.log(this.props.video);
    localStorage.setItem(this.props.video.id.videoId, this.props.video);
  };

  render() {
    return (
      <button className="ui button" onClick={this.onSaveClick}>
        <i className="fitted heart outline icon" />
      </button>
    );
  }
}

export default SaveButton;
