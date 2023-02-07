import { log } from "console";
import { useState } from "react";
import { redirect, useNavigate, useParams } from "react-router";
import styled from "styled-components";
import { SliderProps } from "../../../utils/type";
import GalleryBtn from "./GalleryBtn";

export default function Slider({ images, classname, id }: SliderProps) {
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
  const navigate = useNavigate();

  const handleClick = () => {
    console.log(id);
    navigate(`logements/${id}`);
  };
  return (
    <GalleryStyled className={classname}>
      {images.length > 1 ? (
        <>
          {images.map((image, index) => (
            <div
              key={index}
              className={slideIndex === index ? "slide active" : "slide"}
            >
              <img
                src={`${image}`}
                alt="images de la location"
                onClick={handleClick}
              />
            </div>
          ))}

          <GalleryBtn
            moveSlide={() => changeSlide("next")}
            direction={"next"}
          />
          <GalleryBtn
            moveSlide={() => changeSlide("prev")}
            direction={"prev"}
          />

          <div className="container-dots">
            {images.map((image, index) => (
              <div
                className={slideIndex === index ? "dot active" : "dot"}
                key={index}
              ></div>
            ))}
          </div>
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
  position: relative;
  margin: 0px 0px;
  width: 100%;
  height: 350px;
  cursor: pointer;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  :hover {
    .btn-slide {
      opacity: 0.8;
    }
  }
  .slide {
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0;
    transition: opacity ease-in-out 0.4s;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      /* border-radius: 25px; */
      border-radius: 15px;
    }
    &.active {
      opacity: 1;
    }
  }

  .btn-slide {
    width: 40px;
    height: 40px;
    background-color: transparent;
    border: none;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: white;
    opacity: 0;
    border-radius: 50%;
    transition: 400ms ease;
    z-index: 100;
  }
  .btn-slide img {
    width: 15px;
    height: 15px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    cursor: pointer;
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
  .container-dots {
    position: absolute;
    display: flex;
    bottom: 0;
    .dot {
      width: 8px;
      height: 8px;
      background-color: white;
      opacity: 0.8;
      margin: 0px 3px;
      margin-bottom: 20px;
      border-radius: 50%;
      transition: all 400ms ease;
      &.active {
        opacity: 1;
        scale: 1.2;
        transition: all 400ms ease;
      }
    }
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
