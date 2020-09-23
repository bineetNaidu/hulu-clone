import React from "react";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import SearchIcon from "@material-ui/icons/Search";
import PersonOutlineRoundedIcon from "@material-ui/icons/PersonOutlineRounded";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HomeIcon from "@material-ui/icons/Home";

// STATICS
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__icons">
        <div className="header__icon header__icon--active">
          <HomeIcon />
          <p>Home</p>
        </div>
        <div className="header__icon">
          <FlashOnIcon />
          <p>Trending</p>
        </div>
        <div className="header__icon">
          <LiveTvIcon />
          <p>Verified</p>
        </div>
        <div className="header__icon">
          <VideoLibraryIcon />
          <p>Collections</p>
        </div>
        <div className="header__icon">
          <SearchIcon />
          <p>Search</p>
        </div>
        <div className="header__icon">
          <PersonOutlineRoundedIcon />
          <p>Account</p>
        </div>
      </div>

      <img
        src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png"
        alt="Hulu Logo"
      />
    </div>
  );
}

export default Header;
