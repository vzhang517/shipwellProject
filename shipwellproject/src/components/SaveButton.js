import React from "react";

class SaveButton extends React.Component {
  state = { saved: false };

  componentDidMount() {
    this.isSaved();
  }

  isSaved = () => {
    if (localStorage.getItem(this.props.video.id.videoId) === null) {
      this.setState({ saved: false });
    } else {
      this.setState({ saved: true });
    }
  };

  onSaveClick = event => {
    localStorage.setItem(
      this.props.video.id.videoId,
      JSON.stringify(this.props.video)
    );

    this.isSaved();
  };

  onUnSaveClick = event => {
    localStorage.removeItem(this.props.video.id.videoId);
    this.isSaved();
  };

  render() {
    if (this.state.saved === false) {
      return (
        <button className="ui button" onClick={this.onSaveClick}>
          <i className="fitted heart outline icon" />
        </button>
      );
    }

    return (
      <button className="ui button" onClick={this.onUnSaveClick}>
        <i className="fitted heart icon" />
      </button>
    );
  }
}

export default SaveButton;
