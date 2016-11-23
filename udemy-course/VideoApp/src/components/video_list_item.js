import React from 'react';

// ES6 Feature: ({video}) is a way of accesing the video prop inside the passed object
const VideoListItem = ({video, onVideoSelect}) => {
  console.log(video);
  const imgUrl = video.snippet.thumbnails.default.url;

  const handleOnClick = function(e){
    onVideoSelect(video);
  }

  return (
    <li className="list-group-item" onClick={handleOnClick}>
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imgUrl} />
        </div>

        <div className="media-body">
          <div className="media-heading">
            {video.snippet.title}
          </div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
