import React from "react";
import { Switch, Route } from "react-router-dom";
import BookPage from "./BookPage";
import Results from "./Results";
import Search from "./Search";
import { Container } from "react-bootstrap";
import RegistrationPage from "./RegistrationPage";
import Login from "./Login";

export default function Home() {

  return (
    <Switch>
      <Route exact path="/">
        <Container className="mt-sm-4 mt-3 search d-flex flex-column">
          <Search />
        </Container>
      </Route>
      <Route path="/login">
        <Container className="mt-sm-4 mt-3 search d-flex flex-column">
          <Login/>
        </Container>
      </Route>
      <Route path="/register">
        <Container className="mt-sm-4 mt-3 search d-flex flex-column">
          <RegistrationPage />
        </Container>
      </Route>
      <Route path="/results">
        <Container className=" mt-sm-4 mt-3 py-5 p-md-5 search d-flex flex-column">
          <Results />
        </Container>
      </Route>
      <Route path="/book">
        <Container className="mt-sm-4 mt-3 search d-flex flex-column">
          <BookPage />
        </Container>
      </Route>
    </Switch>
  );
}
