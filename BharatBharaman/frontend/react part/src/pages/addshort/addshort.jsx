import React from 'react';
import './addshort.css';

class AddShortPost extends React.Component {
  previewVideo = (event) => {
    const video = document.querySelector('video');
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      video.src = e.target.result;
    };

    reader.readAsDataURL(file);
  };

  uploadReels = () => {
    // Add your upload functionality here
    alert('Reels uploaded!');
  };

  render() {
    return (
      <div className="upload-container-prefixsachin">
        <div className="firstwaladivnewnextfirstwalapostreels">
          <video controls></video>
        </div>
        <div className="newnextsachinpalpostreelsdusradiv">
          <input
            type="file"
            accept="video/*"
            capture="user"
            onChange={this.previewVideo}
          />
          <input type="text" placeholder="Enter caption" />
          <button onClick={this.uploadReels}>Upload Reels</button>
        </div>
      </div>
    );
  }
}

export default AddShortPost;