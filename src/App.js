import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./Video";
import axios from "./axios";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchPost() {
      const responce = await axios.get("/v2/posts");
      setVideos(responce.data);
      return responce;
    }
    fetchPost();
  }, []);

  return (
    <div className="app">
      <div className="app__videos">
        {videos.map((video) => (
          <Video
            key={video._id}
            url={video.url}
            channel={video.channel}
            description={video.description}
            song={video.song}
            likes={video.likes}
            messages={video.messages}
            shares={video.shares}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
