import React from "react";
import ImageToggleOnMouseOver from "../src/ImageToggleOnMouseOver";

const imageChangeOnMouseOver = () => {
  return (
    <div>
      <ImageToggleOnMouseOver
        primaryImg="/static/boy/boy_black_white.jpg"
        secondaryImg="/static/boy/boy.jpg"
      />
      &nbsp;&nbsp;&nbsp;
      <ImageToggleOnMouseOver
        primaryImg="/static/boy/newboy_black_white.jpg"
        secondaryImg="/static/boy/newboy.jpg"
      />
    </div>
  );
};

export default imageChangeOnMouseOver;
