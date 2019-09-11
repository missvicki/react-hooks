import React, { useState, useRef } from "react";

const imageToggleOnMouseOver = ({ primaryImg, secondaryImg }) => {
  const imageStyle = {
    width: "20%",
    height: "50%"
  };

  const imageRef = useRef(null);

  return (
    <img
      src={primaryImg}
      alt=""
      ref={imageRef}
      style={imageStyle}
      onMouseOver={() => {
        imageRef.current.src = secondaryImg;
      }}
      onMouseOut={() => {
        imageRef.current.src = primaryImg;
      }}
    />
  );
};

export default imageToggleOnMouseOver;
