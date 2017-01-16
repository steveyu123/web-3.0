 
//all code we write is siloed. ZERO contact with any file unless specified. Unless you Import or export 
// App by itself is just a class, but when you wrap it with JSX tags it becomes an instances
// Changing the App component form a functional component to a class component because we want it to keep track of the data being passed and persist with it
// when a user searches for data, they are looking for the top x results of the videos, but each time they change the search term. The value changes and data changes.
// due to this evolving nature, state is needed
//in ES6 when a key value and its name pair are the same name you can just call it once instead of (Data: Data) with Data.
//Data is passed via props. For class components we use this.props whereas in functional components they refer to the items as props
//when you reset the state the props value will get updated as well. See the <VideoList videos={this.state.videos}> the this.state.videos will change
//when using a funcitonal component the prop object will arrive as an argument, props 

//we created selectedVideo because the video always played at videos[0], we set its initial state to null first, we want the user to be able to select what video they want
//At first we put selectedVideo as Video[0] to be displayed and then we added the onVideoSelect property to its render
//onVideoSelect would change the selectedVideo state to a new selected video state 


import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
//for files we create we must put the file path, but if it is like a node installed with NPM or a library like React we dont have to
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = '';
//insert your api key here. Youtube Data v3




class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('ethereum');
  }
//this is the initial start state. 


videoSearch(term){
	YTSearch({key: API_KEY, term: term}, 
		(videos) => {this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		});	
	}


	render(){

		const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300);
		//lodash method that throttles the searches to every 300 seconds instead of immediately 
		//.debounce takes the inner function and create a new functions that is only allowed to be called every 300ms
		//You can try to call it more than once every 300seconds but it won't run more than once every 300 seconds


		return( 
			<div>
				<SearchBar onSearchTermChange={videoSearch} />
//

				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos ={this.state.videos} />
			</div>

		);
	}
}



 //take this component's generated 



 ReactDOM.render(<App />, document.querySelector('.container'));

