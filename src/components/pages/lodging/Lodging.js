import { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Footer from "../../reusableui/Footer";
import Header from "../../reusableui/header/Header";
import lodgingsData from "../../../data/lodging.json";
import LodgingInfo from "./LodgingInfo";
import styled from "styled-components";
import Mosaique from "./Mosaique";
import { AiOutlineHeart } from "react-icons/ai";
import GlobalContext from "../../context/GlobalContext";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function Lodging() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isLiked, setIsLiked, data } = useContext(GlobalContext);

  useEffect(() => {
    if (!lodgingsData.find((item) => item.id === id)) {
      return navigate("/error404");
    }
  });

  const addToFavorite = (event) => {
    let lodgingsLiked = [...isLiked];
    let lodgingFiltered = data.find(
      (lodging) => lodging.id === event.target.id
    );
    let lodgingAlreadyLiked = lodgingsLiked.find(
      (lodging) => lodging.id === event.target.id
    );
    console.log(event.target);
    if (lodgingFiltered && !lodgingAlreadyLiked) {
      lodgingsLiked.push(lodgingFiltered);
      setIsLiked(lodgingsLiked);
    } else if (lodgingAlreadyLiked) {
      let lodgingsLikedWithoutSelectedLodging = lodgingsLiked.filter(
        (lodging) => lodging.id !== event.target.id
      );
      setIsLiked(lodgingsLikedWithoutSelectedLodging);
    }
  };

  const backToHome = () => {
    navigate("/");
  };

  return (
    <LodgingStyled>
      <Header />
      <div className="lodging-content">
        {lodgingsData
          .filter((item) => item.id === id)
          .map((item) => {
            return (
              <div key={item.id}>
                <button className="return-button" onClick={backToHome}>
                  <AiOutlineArrowLeft className="return-icon" />
                </button>
                <div className="top">
                  <h1>{item.title}</h1>
                  <div className="register" onClick={addToFavorite}>
                    <AiOutlineHeart />
                    <p id={item.id}>Enregistrer</p>
                  </div>
                </div>
                <div className="part1">
                  <Mosaique images={item.pictures} />
                </div>
                <div className="part22">
                  <div className="part2-left">
                    <LodgingInfo
                      title={item.title}
                      location={item.location}
                      tags={item.tags}
                      host={{
                        name: `${item.host.name}`,
                        picture: `${item.host.picture}`,
                      }}
                      rating={item.rating}
                    />
                    <div className="description">
                      <h3>Description</h3>
                      <p>{item.description}</p>
                    </div>
                    <div className="equipments">
                      <h3>Équipements</h3>
                      <div className="equipments-list">
                        {item.equipments.map((item) => (
                          <p key={item}>{item}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="part2-right">
                    <form action=""></form>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <Footer />
    </LodgingStyled>
  );
}

const LodgingStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  width: 100%;
  height: 100vh;
  .lodging-content {
    flex-grow: 1;
    padding: 0px 40px;
    margin-top: 100px;
  }
  .return-button {
    width: 40px;
    height: 40px;
    background-color: #ffffff32;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    margin-bottom: 10px;
    border-radius: 50%;
    :hover {
      background-color: #ffffff60;
      transition: all 400ms ease;
    }
    .return-icon {
      font-size: 16px;
      color: white;
    }
  }
  .top {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    h1 {
      color: white;
      margin-bottom: 20px;
      font-weight: 400;
      font-size: 40px;
    }
    .register {
      display: flex;
      align-items: center;
      color: white;
      cursor: pointer;
      background-color: #ffffff32;
      transition: all 400ms ease;
      padding: 6px 10px;
      border-radius: 5px;
      position: relative;
      :hover {
        background-color: #ffffff60;
        transition: 400ms ease;
      }
      p {
        color: white;
        margin-left: 10px;
        text-decoration: underline;
      }
    }
  }
  .description {
    margin: 10px 0;
    h3 {
      padding: 10px 0px;
      color: white;
      font-size: 24px;
      font-weight: 400;
    }
    p {
      color: white;
      padding: 30px 0px;
      border-bottom: 2px solid #ffffff32;
    }
  }
  .equipments {
    margin: 10px 0px;
    h3 {
      padding: 10px 0px;
      color: white;
      font-size: 24px;
      font-weight: 400;
    }
    .equipments-list {
      padding: 30px 0px;
      border-bottom: 2px solid #ffffff32;
      p {
        color: white;
      }
    }
  }
  .part1 {
  }
  .part22 {
    margin-top: 40px;
    display: grid;
    grid-template-columns: 60% 40%;
    grid-gap: 10px;
    .part2-left {
    }
    .part2-right {
      display: flex;
      justify-content: right;
      margin-right: 10px;
      form {
        background-color: white;
        border-radius: 15px;
        width: 80%;
        height: 600px;
      }
    }
  }
  /* @media screen and (max-width: 1024px) {
    .lodging-content {
      padding: 0 50px;
    }
  }
  @media screen and (max-width: 768px) {
    .lodging-content {
      padding: 0 20px;
    }

    .collapses {
      flex-direction: column;
    }
    .collapse {
      width: 100%;
      margin-bottom: 0px;
    } */
`;
