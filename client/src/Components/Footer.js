//TODO-------IMPORT MODULES--------
import React from "react";

//TODO-------CREATE DISPLAY--------
export default function Footer() {
  return (
    <footer>
      {/* //TODO-------FOOTER MENU-------- */}
      <div className="menu">
        <ul>
          <li>Home</li>
          <li>Terms and Conditions</li>
          <li>Privacy Policy</li>
          <li>Collection Statement</li>
          <li>Help</li>
          <li>Manage Account</li>
        </ul>
        <p>Copyright©2020 Lion Movies All rights reserved</p>
      </div>
      {/* //TODO-------FOOTER SOCIAL----------- */}
      <div className="share">
        <div className="socials">
          <img
            className="social"
            src="./assets/social/facebook-blue.svg"
            alt=""
          />
          <img
            className="social"
            src="./assets/social/instagram-blue.svg"
            alt=""
          />
          <img
            className="social"
            src="./assets/social/twitter-blue.svg"
            alt=""
          />
        </div>
        {/* //TODO-------FOOTER STORE-------- */}
        <div className="stores">
          <img className="store" src="./assets/store/app-store.svg" alt="" />
          <img className="store" src="./assets/store/play-store.svg" alt="" />
          <img
            className="store"
            src="./assets/store/windows-store.svg"
            alt=""
          />
        </div>
      </div>
    </footer>
  );
}
