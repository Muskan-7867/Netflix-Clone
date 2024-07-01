import React, { useEffect } from "react";
import Header from "./Header";
import useNowPLayingMovies from "../hooks/useNowPlayingMovies.jsx";
import Maincontainer from "./Maincontainer";
import Secondarycontainer from "./Secondarycontainer";
import usePopularMovies from "../hooks/usePopularMovies.jsx";
import useUpComingMovies from "../hooks/useUpComingMovies.jsx";
import Gptsearch from "./Gptsearchpage.jsx";
import { useSelector } from "react-redux";

export const Browse = () => {
  const showgptsearch = useSelector((store) => store.gpt.showgptsearch);
  useNowPLayingMovies();
  usePopularMovies();
  useUpComingMovies();

  return (
    <div className="no-scrollbar">
      <Header />
      {showgptsearch ? (
        <Gptsearch />
      ) : (
        <>
          <Maincontainer />
          <Secondarycontainer />
        </>
      )}
     
    </div>
  );
};
export default Browse;
