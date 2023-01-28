import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Footer from "../../reusableui/footer/Footer";
import Header from "../../reusableui/header/Header";
import lodgingsData from "../../../data/lodging.json";
import Gallery from "./Gallery";
import Collapse from "../../reusableui/collapse/Collapse";
import LodgingInfo from "./LodgingInfo";
import styled from "styled-components";

export default function Lodging() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!lodgingsData.find((item) => item.id === id)) {
      return navigate("/error404");
    }
  });

  return (
    <LodgingStyled>
      <Header />
      <div className="lodging-content">
        {lodgingsData
          .filter((item) => item.id === id)
          .map((item) => {
            return (
              <div key={item.id}>
                <Gallery images={item.pictures} />

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

                <div className="collapses">
                  <div className="collapse">
                    <Collapse title="Description" content={item.description} />
                  </div>
                  <div className="collapse">
                    <Collapse
                      title="Équipements"
                      content={item.equipments.map((item) => (
                        <p key={item}>{item}</p>
                      ))}
                    />
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
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  .lodging-content {
    flex-grow: 1;
    padding: 0px 100px;
  }
  .lodging-info-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    margin-bottom: 30px;
  }
  .lodging-info-left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .lodging-info-left h2 {
    color: #ff6060;
    font-weight: 400;
    font-size: 36px;
  }
  .lodging-info-left p {
    color: #ff6060;
    font-size: 18px;
    margin-bottom: 20px;
  }
  .tags-container ul {
    margin: 0px 0px;
    display: flex;
    width: 100%;
  }
  .tags-container li {
    list-style-type: none;
    color: white;
    background-color: #ff6060;
    border-radius: 10px;
    padding: 7px 20px;
    margin-right: 10px;
  }

  .lodging-info-right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
  }
  .lodging-info-right-host {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .lodging-info-right-host p {
    color: #ff6060;
    font-size: 18px;
    margin-right: 15px;
    width: min-content;
  }
  .lodging-info-right-host img {
    width: 60px;
    border-radius: 50%;
  }

  .collapses {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 10px;
  }
  .collapse {
    width: 47%;
  }

  @media screen and (max-width: 1024px) {
    .lodging-content {
      padding: 0 50px;
    }
  }
  @media screen and (max-width: 768px) {
    .lodging-content {
      padding: 0 20px;
    }
    .lodging-info-container {
      display: flex;
      justify-content: space-between;
      margin: 20px 0px 0px 0px;
      flex-direction: column;
    }

    .lodging-info-left {
      display: flex;
      flex-direction: column;
    }
    .lodging-info-left h2 {
      font-size: 18px;
    }
    .lodging-info-left p {
      font-size: 14px;
      margin-bottom: 0px;
      margin: 10px 0px;
    }
    .tags-container li {
      border-radius: 5px;
      padding: 7px 20px;
      margin-right: 10px;
      font-size: 10px;
    }

    .lodging-info-right {
      margin-top: 10px;
      flex-direction: row-reverse;
      justify-content: space-between;
      align-items: center;
    }
    .lodging-info-right-host p {
      font-size: 12px;
    }
    .lodging-info-right-host img {
      width: 32px;
    }

    .collapses {
      flex-direction: column;
    }
    .collapse {
      width: 100%;
      margin-bottom: 0px;
    }
  }
`;
