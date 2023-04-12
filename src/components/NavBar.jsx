import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <Link to="/">To All Players</Link>
      <Link to="/singleplayer/:id">To Single Player</Link>
      <Link to="/newplayerform">To New Player Form</Link>
    </div>
  );
}
