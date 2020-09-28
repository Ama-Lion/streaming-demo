//TODO-------IMPORT MODULES--------
import React from "react";
import { Link } from "react-router-dom";

//TODO-------CREATE DISPLAY--------
export default function Home() {
  return (
    <div className="boxes">
      <img src="./public/app-store.svg" alt="" />
      <div className="box">
        <Link to="/series">
          <h1>Series</h1>
        </Link>
      </div>

      <div className="box">
        <Link to="/movies">
          <h1>Movie</h1>
        </Link>
      </div>
    </div>
  );
}
