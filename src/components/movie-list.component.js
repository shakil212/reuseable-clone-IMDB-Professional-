import React, { useEffect, useState } from "react";
import TableComponent from "./common/table.component";
import fetchMovies from "../service/fetch_movies";
import "../styles/styles.css"; // Import CSS file

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 10;

  const columns = [
    { label: "ID", path: "id", content: (item, path) => <>{item[path]}</> },
    { label: "Rank", path: "rank", content: (item, path) => <>{item[path]}</> },
    {
      label: "Title",
      path: "fullTitle",
      content: (item, path) => <>{item[path]}</>,
    },
    {
      label: "Poster",
      path: "image",
      content: (item, path) => (
        <img src={item[path]} alt="not found" className="poster-image" />
      ),
    },
    {
      label: "Rating",
      path: "imDbRating",
      content: (item, path) => <>{item[path]}</>,
    },
    {
      label: "Likes",
      path: "imDbRatingCount",
      content: (item, path) => <>{item[path]}</>,
    },
  ];

  useEffect(() => {
    async function fetchData() {
      const data = await fetchMovies();
      const movieList = data.items;
      setMovies(movieList);
    }

    fetchData();
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <TableComponent
      items={movies}
      columns={columns}
      limit={limit}
      currentPage={currentPage}
      onPageChange={handlePageChange}
    />
  );
}

export default MovieList;
