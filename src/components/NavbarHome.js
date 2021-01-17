import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";
import Logout from "./Logout";
import {RiHomeHeartLine} from "react-icons/ri"

export default function NavbarHome() {
  const { userLogged } = useContext(Context);

  return (
    <Container fluid className=" navbarHome text-center">
        <Row>
          <Col className=" text-left">
            <Link id="sb" to="/">
            <RiHomeHeartLine id="home-btn"/>
            </Link>
          </Col>
          <Col className="my-auto text-right">
            {userLogged ? (
              <Logout /> ):(
                <Link to="/login">
                  <span className="sign"><h2>Signup/Login</h2></span>
                </Link>
              )
            }
          </Col>
        </Row>
    </Container>
  );
}
