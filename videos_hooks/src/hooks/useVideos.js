import { useState, useEffect } from 'react'
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([])
    const KEY = "AIzaSyCxKI74jzk8n1g3HxH8ScX75mFHN1p07Zg";

    // useEffect(() => {
    //   search('defaultSearchTerm');
    // }, [])

    const search = async (term) => {
        const response = await youtube.get("/search", {
            params: {
                q: term,
                part: "snippet",
                maxResults: 5,
                key: KEY,
            },
        });

        setVideos(response.data.items);
    };
    return [videos, search]
}

export default useVideos