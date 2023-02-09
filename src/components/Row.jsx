import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Row = ({ title, fetchURL, rowID }) => {
  const [movies, setMovies] = useState([]);

  //   fetches movie data for the row components
  useEffect(() => {
    axios.get(fetchURL).then((resp) => {
      setMovies(resp.data.results);
    });
  }, [fetchURL]);

  // Fuctions to slide rows
  const slideLeft = () => {
    const slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    const slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>

      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          className="left-0 bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={35}
        />

        <div
          id={"slider" + rowID} // grabs the row by ids
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((item, id) => (
            <Movie item={item} key={id} />
          ))}
        </div>

        <MdChevronRight
          onClick={slideRight}
          className="right-0 bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer -10 hidden group-hover:block"
          size={35}
        />
      </div>
    </>
  );
};

export default Row;
