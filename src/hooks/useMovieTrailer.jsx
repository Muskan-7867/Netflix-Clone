import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_options } from "../../utills/constants";
import { addTrailerVideo } from "../../utills/movieslice.jsx";

const useMovieTrailer = (movieid) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getMovieVideos = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieid}/videos?language=en-US`,
          API_options
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const json = await response.json();
        
        if (json.results) {
          const filterdata = json.results.filter(
            (video) => video.type === "Trailer"
          );
          const trailer = filterdata.length ? filterdata[0] : json.results[0];
          
          dispatch(addTrailerVideo(trailer));
        } else {
          console.error('No results found in the response');
        }
      } catch (error) {
      
      }
    };

    getMovieVideos();
  }, [movieid, dispatch]);
};

export default useMovieTrailer;
