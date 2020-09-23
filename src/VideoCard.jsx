import React from "react";

// STATIC
import "./VideoCard.css";

function VideoCard({ movie }) {
  return (
    <div className="videoCard">
      <img
        src="https://image.tmdb.org/t/p/original//7pCIWCBrsgB8tLBb4WRdhp1OtR7.jpg"
        alt=""
      />
      <p>This is film about coding</p>
      <h2>Movie Title</h2>
      <p className="videoCard__stats">No of likes...</p>
    </div>
  );
}

export default VideoCard;
