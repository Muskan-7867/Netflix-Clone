import React from "react";
import { IMG_CDN_URL } from "../../utills/constants";
import { useDispatch } from "react-redux";
import { getid, setopen } from "../../utills/movieslice";

const MovieCard = ({ posterPath, movieid }) => {
  const dispatch = useDispatch();
  if (posterPath === null) return null;

  const handleopen = () => {
    dispatch(getid(movieid));
    dispatch(setopen(true));
  };

  return (
    <div
      onClick={handleopen}
      className="md:w-48 w-36 pr-4 transform transition-transform duration-500 hover:scale-110"
    >
      <img
        alt="Movie card"
        src={IMG_CDN_URL + posterPath}
        className="rounded-lg shadow-lg"
      />
    </div>
  );
};

export default MovieCard;
