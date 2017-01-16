import React from 'react';

//using {video} is the same as const video = props.video
// The need to use .video is because when we passed the video via video_list, we set the name and property equal to video.
// For each specific element that is clicked will have a new video. It will also trigger the callback and set the new state of the video clicked.


const VideoListItem = ({video, onVideoSelect}) => {
	//const video = props.video
	//const onVideoSelect = props.onVideoSelect
	const imageUrl = video.snippet.thumbnails.default.url;


 return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};



export default VideoListItem;
