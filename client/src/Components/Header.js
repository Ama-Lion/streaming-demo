//TODO-------IMPORT MODULES--------
import React from "react";
import { Link } from "react-router-dom";

//TODO-------CREATE DISPLAY--------
export default function Header() {
  return (
    <div>
      <nav className="navbar fixed-top navbar-light bg-light fixed bg-white border-bottom shadow-sm">
        <Link to="/">
          {/* //TODO-------BRAND/LOGO-------- */}
          <a className="navbar-brand" href="#">
            <img
              src="https://ae01.alicdn.com/kf/HTB1eilUMhnaK1RjSZFtq6zC2VXaC/Abstract-Painting-By-Numbers-Colorful-Lion-Animals-DIY-Digital-Coloring-By-Numbers-Modern-Wall-Art-Picture.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top logo"
              alt=""
            />
            LionMovies
          </a>
        </Link>
        {/* //TODO-------BUTTONS-------- */}
        <div>
          <button class="btn btn-warning ">Login</button>
          <button type="button" class="btn btn-primary">
            Start your free trial
          </button>
        </div>
      </nav>
    </div>
  );
}
