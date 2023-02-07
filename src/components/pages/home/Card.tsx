import { Link } from "react-router-dom";
import styled from "styled-components";
import { Cardprops } from "../../../utils/type";
import { AiFillStar } from "react-icons/ai";
import Gallery from "../lodging/Gallery";
import { useState } from "react";
export default function Card({
  id,
  cover,
  title,
  rate,
  pictures,
  tags,
  location,
}: Cardprops) {
  const [isLike, SetIsLike] = useState(false);
  const handleClick = (event: any) => {
    event.preventDefault();
    SetIsLike(!isLike);
    console.log(isLike);
  };
  return (
    <CardStyled>
      <Gallery images={pictures} classname="gallery" id={id} />
      <div className="like-button">
        <button onClick={handleClick}>
          <img
            src="/Images/heart.svg"
            alt="like button"
            className={isLike ? "btn like" : "btn unliked"}
          />
        </button>
      </div>
      <Link to={`logements/${id}`} className="card-info">
        <div className="title">
          <p>{title}</p>
          <div className="stars">
            <AiFillStar className="icon" />
            <span>{rate}</span>
          </div>
        </div>
        <p className="location">{location}</p>
        <div className="price">
          <p>
            <span>200$</span> par nuit
          </p>
        </div>
        <div className="tags-container">
          <ul>
            {tags.map((element, index) => (
              <li key={index} className="tag">
                {element}
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  width: 350px;
  height: 450px;
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 1.2rem;
  background-size: cover;
  transition: all 200ms ease;
  /* background: rgba(255, 255, 255, 0.06); */
  border-radius: 15px;

  /* padding: 5px; */
  /* box-shadow: 2px 2px 10px 10px rgba(0, 0, 0, 0.3);
  border-top: 1px solid rgba(125, 125, 125, 0.24);
  border-left: 1px solid rgb(125, 125, 125, 0.24); */

  /* background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 5px;
  backdrop-filter: blur(20px);
  box-shadow: 2px 2px 10px 4px rgba(0, 0, 0, 0.1);
  border-top: 1px solid rgba(125, 125, 125, 0.219);
  border-left: 1px solid rgba(125, 125, 125, 0.219); */
  .location {
    font-size: 14px;
    margin-bottom: 2px;
  }
  .like-button {
    position: absolute;
    top: 0;
    right: 0;
    margin: 20px;
    button {
      background: transparent;
      border: none;
      width: 30px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      &:active {
        scale: 0.9;
      }
    }
  }
  .card-linearGradient {
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, #ffff 0%, rgb(0, 0, 0) 100%);
    opacity: 0.2;
    position: absolute;
  }
  .card-info {
    text-decoration: none;
    display: flex;
    flex: 1;
    width: 100%;
    padding: 10px 5px;
    color: white;
    flex-direction: column;
    width: 100%;
    border-radius: 15px;

    /* color: #333; */
    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: auto;
      font-size: 18px;
      margin-bottom: 5px;
      p {
        width: 85%;
        font-weight: 600;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .stars {
        height: 100%;
        font-size: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        .icon {
          font-size: 16px;
          margin-right: 5px;
        }
        span {
          font-weight: 400;
        }
      }
    }
    .tags-container {
      width: 100%;
      position: relative;
      display: flex;
      text-decoration: none;
      align-items: center;
      margin-top: 20px;
      ul {
        display: flex;
        flex-wrap: wrap;
      }
      li {
        width: auto;
        height: 25px;
        list-style-type: none;
        font-size: 12px;
        padding: 5px 10px;
        margin-right: 5px;
        background-color: #ffffff32;
        border-radius: 10px;
        color: #fff;
        font-weight: 600;

        /* background-color: #333;
        background-color: #ff6060;
        color: #fff; */
      }
    }
    .price {
      font-size: 16px;
      font-weight: 400;
      span {
        font-weight: 700;
      }
    }
  }

  /* @media screen and (max-width: 1024px) {
    width: 40%;
    min-width: 250px;
    height: 300px;
    margin: 15px;
    transition: all 0.4ms;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 310px;
    margin: 0px 0px 20px 0px;
  } */
`;
