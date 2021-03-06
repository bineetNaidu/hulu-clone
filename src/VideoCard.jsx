import React, { forwardRef } from "react";
import TextTruncate from "react-text-truncate";
import ThumbUpAltSharpIcon from "@material-ui/icons/ThumbUpAltSharp";

// STATIC
import "./VideoCard.css";

const VideoCard = forwardRef(
  (
    {
      overview,
      backdrop_path,
      title,
      poster_path,
      release_date,
      vote_count,
      first_air_date,
      media_type,
      original_name,
    },
    ref
  ) => {
    const base_url = "https://image.tmdb.org/t/p/original";
    const url =
      backdrop_path !== (undefined || null)
        ? `${base_url}${backdrop_path}`
        : `${base_url}${poster_path}`;
    return (
      <div className="videoCard" ref={ref}>
        <img src={url} alt={`${title || original_name}'s Logo`} />
        <TextTruncate line={1} element="p" truncateText="..." text={overview} />
        <h2>{title || original_name}</h2>
        <p className="videoCard__stats">
          {media_type && `${media_type} •  `}
          {release_date || first_air_date} • {"  "}
          <ThumbUpAltSharpIcon />
          {vote_count}
        </p>
      </div>
    );
  }
);

export default VideoCard;
