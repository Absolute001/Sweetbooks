import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import { Carousel, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";
import Footer from "./Footer"

export default function Suggested() {
  const [suggested, setSuggested] = useState([]);
  const { searchBookId } = useContext(Context);

  useEffect(() => {
    const subjects = [
      "romance",
      "fantasy",
      "thriller",
      "children",
      "science",
      "crime",
    ];

    subjects.forEach((arr) => {
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=subject:${arr}&maxResults=3&orderBy=newest&printType=books`
        )
        .then((res) => {
          const { items } = res.data;
          setSuggested((prevState) => [...prevState, items]);
        });
    });
  }, []);

  const thumbnail = suggested.map((subArray) =>
    subArray.map((arr) => ({
      thumbnail: arr.volumeInfo.imageLinks.thumbnail,
      bookId: arr.id,
    }))
  );

  return (
    <Container fluid className="suggested-section d-flex flex-column">
      <Row>
        <Col className="my-3 p-3 text-center ">
          <h3>Suggested Books For Every Taste</h3>
        </Col>
      </Row>
      <div className="my-auto">
        <Carousel indicators={false}>
          {/*ITEM 1*/}
          <Carousel.Item>
            <Row>
              {suggested.length === 0 ? (
                <h1>Loading...</h1>
              ) : (
                thumbnail.map((arr, index) => (
                  <Col key={index} lg={2} xs={4} className="my-3 text-center">
                    <Link to="/book">
                      <Image
                        onClick={() => searchBookId(arr[0].bookId)}
                        className="suggested-thumbnail"
                        fluid
                        src={arr[0].thumbnail}
                        thumbnail
                      />
                    </Link>
                  </Col>
                ))
              )}
            </Row>
          </Carousel.Item>
          {/*ITEM 2*/}
          <Carousel.Item>
            <Row>
              {suggested.length === 0 ? (
                <h1>Loading...</h1>
              ) : (
                thumbnail.map((arr, index) => (
                  <Col key={index} lg={2} xs={4} className="my-3 text-center">
                    <Image
                      onClick={() => searchBookId(arr[1].bookId)}
                      className="suggested-thumbnail"
                      fluid
                      src={arr[1].thumbnail}
                      thumbnail
                    />
                  </Col>
                ))
              )}
            </Row>
          </Carousel.Item>
          {/*ITEM 3*/}
          <Carousel.Item>
            <Row>
              {suggested.length === 0 ? (
                <h1>Loading...</h1>
              ) : (
                thumbnail.map((arr, index) => (
                  <Col key={index} lg={2} xs={4} className="my-3 text-center">
                    <Link to="/book">
                      <Image
                        onClick={() => searchBookId(arr[2].bookId)}
                        className="suggested-thumbnail"
                        fluid
                        src={arr[2].thumbnail}
                        thumbnail
                      />
                    </Link>
                  </Col>
                ))
              )}
            </Row>
          </Carousel.Item>
        </Carousel>
        <Row>
          <span className="mt-4 p-3 text-center "></span>
        </Row>
      </div>
      <Footer />
    </Container>
  );
}
