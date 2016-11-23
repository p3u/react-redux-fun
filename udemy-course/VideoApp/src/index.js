import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const YT_API_KEY = 'AIzaSyBho_UpN4VV3GKJx09o5tClVs0yn1EaaOc';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('doge');
  };

  videoSearch = (term) => {
    YTSearch({key: YT_API_KEY, term: term}, videos => {
      this.setState({
        videos: videos.slice(1),
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return (
      <div>
        {/* I could use arrow functions to bind this to the app component
            I could also make this bind on the constructor in case this
            function was passed to other components */}
        <SearchBar onVideoSearch={this.videoSearch.bind(this)}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          // Using arrow functions binds this to the App class
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  };
};

ReactDOM.render(<App />, document.querySelector('.container'));
