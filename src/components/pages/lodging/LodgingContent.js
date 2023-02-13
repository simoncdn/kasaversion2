import lodgingsData from "../../../data/lodging.json";
import LodgingInfo from "./LodgingInfo";

import Mosaique from "./Mosaique";

import { AiOutlineArrowLeft } from "react-icons/ai";
import styled from "styled-components";
import { Navigate, useNavigate, useParams } from "react-router";
import { useEffect } from "react";

export default function LodgingContent() {
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (!lodgingsData.find((item) => item.id === id)) {
      return navigate("/error404");
    }
  });
  const backToHome = () => {
    Navigate("/");
  };
  return (
    <LodgingContentStyled>
      <button className="home-button" onClick={backToHome}>
        <AiOutlineArrowLeft className="return-icon" />
      </button>

      {lodgingsData
        .filter((item) => item.id === id)
        .map((item) => {
          return (
            <div key={item.id}>
              <h1>{item.title}</h1>

              <Mosaique images={item.pictures} />

              <div className="info-and-booking">
                <LodgingInfo
                  title={item.title}
                  location={item.location}
                  tags={item.tags}
                  host={{
                    name: `${item.host.name}`,
                    picture: `${item.host.picture}`,
                  }}
                  rating={item.rating}
                  description={item.description}
                  equipments={item.equipments}
                />
                <div className="booking">
                  <form action=""></form>
                </div>
              </div>
            </div>
          );
        })}
    </LodgingContentStyled>
  );
}
const LodgingContentStyled = styled.div`
  margin-top: 110px;
  .home-button {
    width: 40px;
    margin-top: 10px;
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

  h1 {
    color: white;
    margin-bottom: 20px;
    font-weight: 400;
    font-size: 40px;
  }

  .info-and-booking {
    width: 100%;
    margin-top: 40px;
    display: grid;
    grid-template-columns: 60% 40%;
    grid-gap: 10px;
    .booking {
      display: flex;
      justify-content: right;
      margin-right: 10px;
      form {
        background-color: white;
        border-radius: 15px;
        width: 80%;
        height: 300px;
      }
    }
  }
`;
