import React from "react";
import { useDistortionEffectCarousel } from "distortion-effect-carousel";
import image1 from "../../../styles/images/hero/Image 1.png";
import image2 from "../../../styles/images/hero/Image 2.png";
import image3 from "../../../styles/images/hero/Image 3.png";
import distortion from "../../../heightMap.png";
import Hero from "./Hero";

function HeroContainer() {
  const [current, setCurrent] = React.useState(0);
  const { ref, next, prev, jump } = useDistortionEffectCarousel({
    images: [image3, image2, image1],
    displacmentImage: distortion,
  });
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => {
        if (prev === 2) {
          return 0;
        } else {
          return prev + 1;
        }
      });
    }, 10000);
    return () => clearInterval(interval);
  }, []);
  React.useEffect(() => {
    // jump(current);
  }, [current]);
  return <Hero ref={ref} jump={jump} />;
}

export default HeroContainer;
