import React from "react";
import Img1 from "./slide1.jpg";
import Img2 from "./slide2.jpg";
import Img3 from "./slide3.jpg";

const Slider = () => {
  const images_array = [
    {
      src: Img1,
      title: "This is slide 1",
    },
    {
      src: Img2,
      title: "This is slide 2",
    },
    {
      src: Img3,
      title: "This is slide 3",
    },
  ];
  const [slide, setSlide] = React.useState(0);
  const slideLoader = () => {
    setTimeout(() => {
      if (slide < images_array.length - 1) {
        setSlide(slide + 1);
      } else {
        setSlide(0);
      }
      // slideLoader();
    }, 3000);
  };
  slideLoader();
  return (
    <div className="slider">
      <h1 className="slider__title">{images_array[slide]?.title}</h1>
      <img src={images_array[slide]?.src} className="slider__img" alt="" />
    </div>
  );
};
export default Slider;
