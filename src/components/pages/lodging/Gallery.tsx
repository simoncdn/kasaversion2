import { useState } from "react";
import styled from "styled-components";
import { SliderProps } from "../../../utils/type";
import GalleryBtn from "./GalleryBtn";

export default function Slider({ images }: SliderProps) {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isTransitionInProgress, setIsTransitionInProgress] = useState(false);

  const changeSlide = (direction: string) => {
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
    <GalleryStyled>
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
    </GalleryStyled>
  );
}

const GalleryStyled = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
  margin: 50px 0px;

  .slide {
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0;
    transition: opacity ease-in-out 0.4s;
  }

  .slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 25px;
  }

  .active {
    opacity: 1;
  }

  .btn-slide {
    width: 60px;
    height: 60px;
    background-color: transparent;
    border: none;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .btn-slide img {
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
  .prev {
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
  }
  .next {
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }

  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
    height: 255px;
    margin: 20px 0px;
    .btn-slide {
      width: 30px;
      height: 30px;
    }
    .prev {
      left: 10px;
    }
    .next {
      right: 10px;
    }
  }
`;
