import React, { useContext, useEffect } from "react";
import { Context } from "../context/Context";
import { Image, Row, Col, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import books from "../img/books.png"


export default function Results() {
  const { setSearchResults, searchResults, searchBookId } = useContext(Context);

  useEffect(() => {
    window.scrollTo(0, 0);
    const resultsValues = JSON.parse(localStorage.getItem("results-state"));
    setSearchResults(resultsValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return Object.keys(searchResults).length === 0 ? (
    <Row className="my-auto mx-auto">
      <Col className="d-flex">
        <Spinner
          className="mx-3 my-auto"
          animation="border"
          role="status"
        ></Spinner>
        <span className="align-middle">
          <h1>Loading...</h1>
          <Image src={books}
          id="book-tower" fluid/>
        </span>
      </Col>
    </Row>
  ) : (
    <div>
      <Row className="text-center mb-5">
        <Col>
          <h2>Which will you pick today?</h2>
        </Col>
      </Row>
      <Row>
        {searchResults.map((item, index) =>
          item.volumeInfo.hasOwnProperty("imageLinks") ? (
            <Col className="text-center" xs={6} md={2} key={index}>
              <Link to="/book">
                <Image
                  onClick={() => searchBookId(item.id)}
                  className="item-result my-2"
                  fluid
                  thumbnail
                  src={item.volumeInfo.imageLinks.thumbnail}
                />
              </Link>
              <h6 className="text-uppercase">
                {item.volumeInfo.title.slice(0, 40)}
              </h6>
            </Col>
          ) : null
        )}
      </Row>
    </div>
  );
}
