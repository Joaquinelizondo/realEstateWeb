import React from "react";
import ImageSilder from "./ImageSlider";

export const Carr = () => {
  const slides = [
    {
      id: 1,
      url: `../../assets/familia1.jpeg`,
      altText: "Slide 1",
      caption: "Slide 1",
    },
    {
      id: 2,
      url: `../../assets/familia1.jpeg`,
      altText: "Slide 2",
      caption: "Slide 2",
    },
    {
      id: 3,
      url: `../../assets/familia1.jpeg`,
      altText: "Slide 3",
      caption: "Slide 3",
    },
  ];

  return (
    <div>
      <ImageSilder slides={slides} />
    </div>
  );
};
