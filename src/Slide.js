import React from "react";
import hoverEffect from "hover-effect";
import strip from "./strip.png";

function Slide({ slide, setSlides, image1, image2 }) {
  React.useEffect(() => {
    setSlides((prev) => {
      const test = prev.filter((prevSlid) => {
        if (prevSlid.id === slide.id) {
          console.log(slide.id);
          const newOne = new hoverEffect({
            parent: document.querySelector(`.${slide.id}`),
            intensity: 0.3,
            image1: image1,
            image2: image2,
            displacementImage: strip,
            hover: false,
          });
          console.log(prevSlid);
          return {
            ...prevSlid,
            hoverEffect: newOne,
          };
        } else {
          return prevSlid;
        }
      });

      return test;
    });
  }, []);
  return (
    <div
      className={slide.id}
      style={{ width: "500px", height: "500px", marginBottom: "50px" }}
    >
      <button onClick={slide.hoverEffect?.previous}>GOGO</button>
      <button onClick={slide.hoverEffect?.next}>GOGO</button>
    </div>
  );
}

export default Slide;
