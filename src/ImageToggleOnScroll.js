import React, { useRef, useEffect, useState } from "react";

const ImageToggleOnScroll = ({ primaryImg, secondaryImg }) => {
  const imageRef = useRef(null);

  // first parameter of useEffect is a function that is run when component is mounted
  // second parameter is a return function that removes the listener
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    setInView(isInView());
    setIsLoading(false);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  });

  const [inView, setInView] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // returns whether the image is shown in the scroll bar area
  const isInView = () => {
    if (imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }
    return false;
  };

  const scrollHandler = () => {
    setInView(() => {
      return isInView();
    });
  };

  return isLoading ? null : (
    <img
      src={inView ? secondaryImg : primaryImg}
      alt=""
      ref={imageRef}
      width="200"
      height="200"
    />
  );
};

export default ImageToggleOnScroll;
