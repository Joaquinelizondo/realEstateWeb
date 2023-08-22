import React from "react";
import HeroSlider, { Slide } from "hero-slider";
import "./styles.css";

import foto1 from "../../assets/PHOTO-2023-07-21-21-34-14.jpg";
import foto2 from "../../assets/PHOTO-2023-07-21-21-34-15.jpg";
import foto3 from "../../assets/PHOTO-2023-07-21-21-34-16.jpg";
import foto4 from "../../assets/PHOTO-2023-07-21-21-34-23.jpg";

export const Slider1 = () => {
  return (
    <div className="slider1">
      <HeroSlider
        slidingAnimation="left_to_right"
        orientation="horizontal"
        initialSlide={1}
        onBeforeChange={(previousSlide, nextSlide) =>
          console.log("onBeforeChange", previousSlide, nextSlide)
        }
        onChange={(nextSlide) => console.log("onChange", nextSlide)}
        onAfterChange={(nextSlide) => console.log("onAfterChange", nextSlide)}
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.15)",
        }}
        settings={{
          slidingDuration: 250,
          slidingDelay: 100,
          shouldAutoplay: true,
          shouldDisplayButtons: true,
          autoplayDuration: 3000,
          height: "40vh",
        }}
      >
        <Slide
          background={{
            backgroundImage: `url(${foto1})`,
            backgroundAttachment: "fixed",
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
        />
        <Slide
          background={{
            backgroundImage: `url(${foto2})`,
            backgroundAttachment: "fixed",
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
        />
        <Slide
          background={{
            backgroundImage: `url(${foto3})`,
            backgroundAttachment: "fixed",
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
        />
        <Slide
          background={{
            backgroundImage: `url(${foto4})`,
            backgroundAttachment: "fixed",
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
        />
      </HeroSlider>
    </div>
  );
};
