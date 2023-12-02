import React from "react";
import { Link } from "react-router-dom";

const imgstyle = {
  objectFit: "cover",
  marginRight: "5vw",
  height: "20vh",
  width: "30vw",
};

function GalleryPic({ img }) {
  return (
    <div>
      <Link to={"/gallerydetail"}>
        <img src={img} alt="gallerypic" style={imgstyle} />
      </Link>
    </div>
  );
}

export default GalleryPic;
