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

    .collapses {
      flex-direction: column;
    }
    .collapse {
      width: 100%;
      margin-bottom: 0px;
    }
  }
`;
