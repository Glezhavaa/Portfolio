import { useState, useEffect } from "react";
import SliderData from "./sliderData";
import * as styles from "./sliderData.module.css";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  });

  return (
    <section className={styles.slider}>
      <FaArrowAltCircleLeft className={styles.leftArrow} onClick={prevSlide} />
      <FaArrowAltCircleRight
        className={styles.rightArrow}
        onClick={nextSlide}
      />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? styles.active : styles.slide}
            key={index}
          >
            {index === current && (
              <img
                src={slide.image}
                alt="travel image"
                className={styles.image}
              />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
