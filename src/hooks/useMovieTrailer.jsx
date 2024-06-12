import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_options } from "../../utills/constants";
import { addTrailerVideo } from "../../utills/movieslice.jsx";

const useMovieTrailer = (movieid) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getMovieVideos = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieid}/videos?language=en-US`,
        API_options
      );

      const json = await response.json();
      console.log(json.results);

      const filterdata = json.results.filter(
        (video) => video.type === "Trailer"
      );
      const trailer = filterdata.length ? filterdata[0] : json.results[0];
      console.log(trailer);
      dispatch(addTrailerVideo(trailer));
    };
    {
      getMovieVideos();
    }
  }, []);
};

export default useMovieTrailer;
