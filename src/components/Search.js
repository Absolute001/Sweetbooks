import React, { useContext, useEffect } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import { Context } from "../context/Context";

export default function Search() {
  const { axiosSearch, searchBarUpdate } = useContext(Context);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="my-auto">
      <Row>
        <Col className="text-center mb-md-5">
          <h3 id="subtitle">Welcome at your favorite place,</h3>
          <h2 className="title">SweetBooks</h2>
        </Col>
      </Row>
      <Row>
        <Col xs={8} className="main-bg mt-2 mx-auto"></Col>
      </Row>
      <Form>
        <Form.Row className="mt-5 px-3 px-sm-5 ">
          <Col xs={8} md={8} lg={8} className="ml-auto">
            <Form.Control
              className="custom-input "
              type="text"
              placeholder="Search your favourite books..."
              onChange={searchBarUpdate}
              onKeyPress={(event) =>
                event.charCode === 13 ? axiosSearch : null
              }
            />
          </Col>
          <Col xs={4} md={2} lg={4} className="text-center mr-auto">
            <Button
              type="submit"
              className="w-100 custom-button "
              onClick={axiosSearch}
            >
              Submit
            </Button>
          </Col>
        </Form.Row>
      </Form>
    </div>
  );
}
