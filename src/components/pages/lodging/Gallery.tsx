import { useState } from "react";
import { SliderProps } from "../../../utils/type";
import GalleryBtn from "./GalleryBtn";

export default function Slider({ images }: SliderProps) {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isTransitionInProgress, setIsTransitionInProgress] = useState(false);

  const changeSlide = (direction) => {
    if (isTransitionInProgress) {
      return;
    }
    setIsTransitionInProgress(true);

    setSlideIndex((prevIndex) => {
      if (direction === "prev") {
        return prevIndex === 0 ? images.length - 1 : prevIndex - 1;
      }

      return prevIndex === images.length - 1 ? 0 : prevIndex + 1;
    });

    setTimeout(() => {
      setIsTransitionInProgress(false);
    }, 400);
  };

  return (
    <div className="slider-container">
      {images.length > 1 ? (
        <>
          {images.map((image, index) => {
            return (
              <div
                key={index}
                className={slideIndex === index ? "slide active" : "slide"}
              >
                <img src={`${image}`} alt="images de la location" />
              </div>
            );
          })}
          <GalleryBtn
            moveSlide={() => changeSlide("next")}
            direction={"next"}
          />
          <GalleryBtn
            moveSlide={() => changeSlide("prev")}
            direction={"prev"}
          />
        </>
      ) : (
        <div className="slide active">
          <img src={`${images[0]}`} alt="location" />
        </div>
      )}
    </div>
  );
}
