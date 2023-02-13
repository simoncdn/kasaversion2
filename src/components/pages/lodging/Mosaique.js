import React from "react";
import styled from "styled-components";
import { CgMenuGridO } from "react-icons/cg";
export default function Mosaique({ images }) {
  console.log(images);
  return (
    <MosaiqueStyled>
      {images.length > 4 ? (
        <>
          <div className="first-part">
            <img src={images[0]} alt="" />
          </div>
          <div className="second-part">
            <div className="part1">
              <img src={images[1]} alt="" />
            </div>
            <div className="part2">
              <img src={images[2]} alt="" />
            </div>
            <div className="part3">
              <img src={images[3]} alt="" />
            </div>
            <div className="part4">
              <img src={images[4]} alt="" />
            </div>
          </div>
        </>
      ) : null}
    </MosaiqueStyled>
  );
}

const MosaiqueStyled = styled.div`
  width: 100%;
  height: 550px;
  border-radius: 25px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 10px;
  position: relative;
  .first-part {
    position: relative;
    width: 100%;
    height: 550px;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .second-part {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 275px);
    grid-gap: 10px;
    .part1 {
      background-color: red;
      width: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .part2 {
      background-color: blue;
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .part3 {
      width: 100%;
      height: 100%;
      background-color: black;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .part4 {
      width: 100%;
      height: 100%;
      background-color: maroon;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .more-photo {
    background-color: white;
    position: absolute;
    display: flex;
    padding: 10px 20px;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    right: 0;
    bottom: 0;
    margin-right: 40px;
    margin-bottom: 30px;
    cursor: pointer;

    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    background: rgba(49, 49, 49, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.34);
    backdrop-filter: blur(9.1px);
    -webkit-backdrop-filter: blur(9.1px);
    :hover {
      background-color: #ffffff60;
      transition: all 400ms ease;
    }
    .icon {
      font-size: 20px;
      color: white;
    }
    p {
      font-size: 16px;
      margin-left: 10px;
      color: white;
    }
  }
`;
