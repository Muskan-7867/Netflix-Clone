import React, { useEffect } from "react";
import { API_options } from "../../utills/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../../utills/movieslice";

const VideoBackground = ({ movieid }) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  const getMovieVideos = async () => {
 
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieid}/videos?language=en-US`,
        API_options
      );


      const json = await response.json();
      console.log(json.results);

      const filterdata = json.results.filter((video) => video.type === "Trailer");
      const trailer = filterdata.length ? filterdata[0] : json.results[0];
      console.log(trailer);
      dispatch(addTrailerVideo(trailer));
    
  };

  useEffect(() => {
   
      getMovieVideos();
    
  }, []);

  return (
    <div>
      
        <iframe
          width="560"
          height="315"
          src={"https://www.youtube.com/embed/" + trailerVideo?.key}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      
    </div>
  );
};

export default VideoBackground;
