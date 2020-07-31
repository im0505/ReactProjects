import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const KEY = "AIzaSyCxKI74jzk8n1g3HxH8ScX75mFHN1p07Zg";

const App = () => {
  const [videos, setVideos] = useState([])
  const [selecteVideo, setSelecteVideo] = useState(null)

  // useEffect(() => {
  //   onTermSubmit('');
  // }, [])

  const onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        key: KEY,
      },
    });

    setVideos(response.data.items);
    setSelecteVideo(response.data.items[0])
  };

  const onVideoSelect = (video) => {
    setSelecteVideo(video)
  };

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={onTermSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selecteVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              onVideoSelect={onVideoSelect}
              videos={videos}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
