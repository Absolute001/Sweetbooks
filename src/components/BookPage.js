import React, { useContext, useEffect } from "react";
import {
  Row,
  Col,
  Image,
  Accordion,
  Card,
  Button,
  Spinner,
} from "react-bootstrap";
import { Context } from "../context/Context";
import { FaGooglePlay } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { MdRemoveShoppingCart } from "react-icons/md";
import { IconContext } from "react-icons";

export default function BookPage() {
  const { setSearchBook, searchBook } = useContext(Context);

  useEffect(() => {
    const resultsValues = JSON.parse(localStorage.getItem("book-state"));
    setSearchBook(resultsValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [searchBook]);

  const volumeInfo = searchBook.volumeInfo

  return Object.keys(searchBook).length === 0 ? (
    <Row className="my-auto mx-auto">
      <Col className="d-flex">
        <Spinner
          className="mx-3 my-auto"
          animation="border"
          role="status"
        ></Spinner>
        <span className="align-middle">
          <h1>Loading...</h1>
        </span>
      </Col>
    </Row>
  ) : (
    <div className="my-auto py-5 px-3 p-lg-5">
      <Row>
        <Col xs={12} sm={4} md={3} lg={3} className=" my-auto text-center">
          <Image src={volumeInfo.imageLinks.thumbnail} thumbnail />
        </Col>
        <Col
          xs={12}
          sm={8}
          md={8}
          lg={8}
          className="text-center my-md-auto my-3"
        >
          <h4>
            {volumeInfo.title} -{volumeInfo.language} -
            {searchBook.saleInfo.isEbook ? " Ebook " : null}
          </h4>
          <IconContext.Provider
            value={{
              className: "custom-icon mx-2",
            }}
          >
            <a href={volumeInfo.infoLink} target="_blank" rel="noreferrer">
              <FaGooglePlay />
            </a>
            {searchBook.saleInfo.buyLink ? (
              <a href={searchBook.saleInfo.buyLink} target="_blank" rel="noreferrer">
                <FaShoppingCart />
              </a>
            ) : (
              <MdRemoveShoppingCart style={{ color: "#e9485e" }} />
            )}
          </IconContext.Provider>
        </Col>
      </Row>
      <Row>
        <Col>
          <Accordion className="mt-2 mt-sm-5 mt-md-5">
            <Card className="accordion-header">
              <Card.Header className="p-0">
                <Accordion.Toggle
                  as={Button}
                  className="custom-button w-100"
                  variant="text"
                  eventKey="0"
                >
                  Description
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="description">
                  {"description" in volumeInfo ? volumeInfo.description.replace(/<[^>]+>/g, ""):"No Description Available For This Book"}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Col>
      </Row>
      <div className="divider my-3 mt-3 mt-md-5"></div>
      <Row>
        <Col>Authors: {volumeInfo.authors}</Col>
      </Row>
      <Row className="mt-3">
        <Col>Pages: {volumeInfo.pageCount}</Col>
      </Row>
      <Row className="mt-3">
        <Col>Publisher {volumeInfo.publishedDate}</Col>
      </Row>
      <div className="divider my-3"></div>
      <Row className="my-2">
        <Col>Categories: {volumeInfo.categories}</Col>
      </Row>
      <Row className="my-2">
        <Col>Rating: {"average" in volumeInfo ? volumeInfo.averageRating:"N/A"}</Col>
      </Row>
      {"industryIdentifiers" in volumeInfo ? volumeInfo.industryIdentifiers.map((arr, index) => (
        <Row key={index}>
          <Col>
            {arr.type} {arr.identifier}
          </Col>
        </Row>
      )):null}
    </div>
  );
}
