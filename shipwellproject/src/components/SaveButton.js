import React from "react";

class SaveButton extends React.Component {
  state = { saved: false };

  componentDidMount() {
    this.isSaved();
  }

  // Sets the state of current item, whether it's saved or not
  isSaved = () => {
    if (localStorage.getItem(this.props.video.id.videoId) === null) {
      this.setState({ saved: false });
    } else {
      this.setState({ saved: true });
    }
  };

  // Function saves video being passed to local storage
  onSaveClick = event => {
    localStorage.setItem(
      this.props.video.id.videoId,
      JSON.stringify(this.props.video)
    );

    this.isSaved();
  };

  // Function deletes video from local storage using videoId passed
  onUnSaveClick = event => {
    localStorage.removeItem(this.props.video.id.videoId);
    this.isSaved();
  };

  // conditional rendering based on saved value, will display solid heard or outline heart
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
