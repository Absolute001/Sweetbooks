import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import appFirebase from "../firebase";

const Context = React.createContext();

const ContextProvider = (props) => {
  let baseUrl = "https://www.googleapis.com/books/v1/volumes";
  const [userLogged, setUserLogged] = useState(false);
  const [searchBar, setSearchBar] = useState("");
  const [searchResults, setSearchResults] = useState({});
  const [searchBook, setSearchBook] = useState("");
  const history = useHistory();

  const searchBarUpdate = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setSearchBar(value);
  };

  const axiosSearch = (event) => {
    event.preventDefault();
    axios
      .get(`${baseUrl}?q=${searchBar}&maxResults=40`)
      .then((res) => {
        console.log(res.data)
        const { items } = res.data;
        if (res.data.totalItems === 0) {
          alert("Your Book was not found, please try again");
        } else {
          setSearchResults(items);
          history.push("/results");
        }
      })
      .catch((err) => {
        // eslint-disable-next-line default-case
        switch (err.response.status) {
          case 400:
            alert(
              "Bad Request — Client sent an invalid request — such as lacking required request body"
            );
            break;
          case 401:
            alert(
              "Unauthorized — Client failed to authenticate with the server"
            );
            break;
          case 403:
            alert(
              "Forbidden — Client authenticated but does not have permission to access the requested resource"
            );
            break;
          case 404:
            alert("Not Found — The requested resource does not exist");
            break;
          case 412:
            alert(
              "Precondition Failed — One or more conditions in the request header fields evaluated to false"
            );
            break;
          case 500:
            alert(
              "Internal Server Error — A generic error occurred on the server"
            );
            break;
          case 503:
            alert(
              "Service Unavailable — The requested service is not available"
            );
            break;
        }
      });
  };

  const searchBookId = (bookId) => {
    axios
      .get(`${baseUrl}/${bookId}`)
      .then((res) => {
        setSearchBook(res.data);
        history.push("/book");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    appFirebase.auth().onAuthStateChanged((user) => {
      setUserLogged(user);
    });
  }, []);

  useEffect(() => {
    window.localStorage.setItem("results-state", JSON.stringify(searchResults));
    window.localStorage.setItem("book-state", JSON.stringify(searchBook));
  });



  return (
    <Context.Provider
      value={{
        history,
        userLogged,
        axiosSearch,
        searchBarUpdate,
        searchResults,
        searchBook,
        searchBookId,
        setSearchResults,
        setSearchBook,
        setUserLogged,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
