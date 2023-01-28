import { useState } from "react";
import { DataProps } from "../../../utils/type";
import Header from "../../reusableui/header/Header";
import Footer from "../../reusableui/footer/Footer";
import Banner from "../../reusableui/banner/Banner";
import Card from "./Card";
import LodgingData from "../../../data/lodging.json";
import styled from "styled-components";

export default function Home() {
  const [data, setData] = useState<DataProps>(LodgingData);

  return (
    <HomeStyled>
      <Header />

      <Banner
        image={"/Images/bannerImgHome.jpg"}
        title="Chez vous, partout et ailleurs"
      />

      <div className="card-container">
        {data.map((item, index) => (
          <Card
            key={index}
            id={item.id}
            title={item.title}
            cover={item.cover}
          />
        ))}
      </div>

      <Footer />
    </HomeStyled>
  );
}

const HomeStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  position: relative;

  .card-container {
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 100px;
    padding: 0 100px;
  }
  @media screen and (max-width: 1024px) {
    .card-container {
      padding: 0 50px;
    }
  }
  @media screen and (max-width: 768px) {
    .card-container {
      padding: 0 20px;
    }
  }
`;
