import React from 'react';
import VideoListItem from './video_list_item';

//key tag is used with an array like lists so it makes updating a list easier without having to recreate the entire list
//for the example we used ETAG as a unique ID for each item. 
//props -> refers to the this.state object from the index. .videos refers to the this.state.videos
//video in this respect is just an arbitary variable name, but it is one of 5 videos, from that object. 

//passing onVideoSelect into the props for video_list_item to have access

const VideoList = (props) => {
	
	const videoItems = props.videos.map((video) => {
		return (
			<VideoListItem 
			onVideoSelect={props.onVideoSelect}
			key={video.etag} 
			video={video} />);
	});
		

	return(
			<ul className='col-md-4 list-group' >
				{videoItems} 
			</ul>
		);
	};



export default VideoList;