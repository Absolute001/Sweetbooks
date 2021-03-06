import React from "react";
import { Button } from "react-bootstrap";
import appFirebase from "../firebase";
import { IconContext } from "react-icons";

export default function Logout() {
  return (
    <IconContext.Provider
      value={{ className: "custom-icon", style: { fontSize: "3em" } }}
    >
      <Button
        className="sign"
        onClick={() => {
          appFirebase.auth().signOut();
          alert("Logged Out!");
        }}
      >
        <span className="sign">
          <h2>LogOut</h2>
        </span>
      </Button>
    </IconContext.Provider>
  );
}
