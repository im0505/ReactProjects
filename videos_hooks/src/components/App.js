import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from '../hooks/useVideos'

const App = () => {
  const [selecteVideo, setSelecteVideo] = useState(null)
  const [videos, search] = useVideos('');


  useEffect(() => {

    setSelecteVideo(videos[0])
  }, [videos])

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selecteVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              // 받는 인지가 하나인 경우 다음과 같이 리팩토링 할 수 있음
              //  (video) => { setSelecteVideo(video) 
              onVideoSelect={setSelecteVideo}
              videos={videos}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
