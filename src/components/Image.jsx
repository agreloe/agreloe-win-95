import React from "react";
import "../assets/stylesheets/Image.css";
import video from "../assets/videos/ezgif.com-gif-maker.gif";
import { selectImage } from "../redux/itemReducer";
import { useDispatch } from "react-redux";

const Image = () => {
    const dispatch = useDispatch();
    const closeImage = () => {
        dispatch(selectImage(false))
    };
  return (
    <div className="window image">
      <div className="top-bar">
        <i className="image-icon" />
        <span>skate_jump.gif</span>
        <button className="close-image" onClick={closeImage}>
          <div></div>
        </button>
      </div>

      <div className="content image">
        <img src={video} alt="gif" />
      </div>
    </div>
  );
};

export default Image;
