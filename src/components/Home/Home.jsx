import { Col, Row, Card, Pagination } from "antd";
import React, { useEffect, useState } from "react";

const { Meta } = Card;
function Home() {
  const [latestMovie, setLatestMovie] = useState([]);
  console.log(latestMovie);
  const { results = [], page, total_pages, total_results } = latestMovie;

  function onChange(page, pageSize) {
    getMovieData(page);
  }
  function itemRender(current, type, originalElement) {
    if (type === "prev") {
      return <a>Previous</a>;
    }
    if (type === "next") {
      return <a>Next</a>;
    }
    return originalElement;
  }
  function getMovieData(currentPage) {
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=b97ee4b164b607d5e4e00130b6fb4e67&language=en-US&page=${currentPage}`
    )
      .then((data) => data.json())
      .then(setLatestMovie);
  }
  useEffect(() => {
    getMovieData(1);
  }, []);

  return (
    <>
      <Row gutter={{ xs: [5, 5], sm: [16, 18], md: 50 }}>
        {results.map((movie) => (
          <Col xs={24} sm={12} md={8} lg={8} xl={6} key={movie.id}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt={movie.title}
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                />
              }
            >
              <Meta title={movie.title} description={movie.title} />
            </Card>
          </Col>
        ))}
      </Row>
      <Row>
        <Col>
          <Pagination
            onChange={onChange}
            total={690}
            itemRender={itemRender}
            showSizeChanger
          />
        </Col>
      </Row>
    </>
  );
}

export default Home;
