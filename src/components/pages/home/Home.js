import { useState } from "react";
import { DataProps } from "../../../utils/type";
import Header from "../../reusableui/header/Header";
import Footer from "../../reusableui/footer/Footer";
import Banner from "../../reusableui/banner/Banner";
import Card from "./Card";
import LodgingData from "../../../data/lodging.json";
import styled from "styled-components";
export default function Home() {
  const [data, setData] = useState(LodgingData);

  const [filterIndex, setFilterIndex] = useState(1);

  const filters = [
    {
      index: 1,
      value: "Tous",
    },
    {
      index: 2,
      value: "Arrondissement",
    },
  ];
  const toggleChange = (index) => {
    console.log(index);
    setFilterIndex(index);
    console.log(filterIndex);
  };

  return (
    <HomeStyled>
      <Header />

      <Banner
        image={"/Images/Paris.jpg"}
        title="Chez vous, partout et ailleurs"
      />
      <div className="filter-container">
        {/* <button
          onClick={toggleChange}
          className={toggle[0].Tous ? "filter open" : "filter"}
          value="Tous"
        >
          Tous
        </button> */}
        {filters.map(({ index, value }) => (
          <button
            key={index}
            index={index}
            onClick={() => toggleChange(index)}
            value={value}
            className={filterIndex === index ? "filter open" : "filter"}
          >
            {value}
          </button>
        ))}
      </div>
      <div className="card-container">
        {data.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            id={item.id}
            cover={item.cover}
            rate={item.rating}
            pictures={item.pictures}
            tags={item.tags}
            location={item.location}
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
  .filter-container {
    display: flex;
    align-items: center;
    justify-content: left;
    padding: 0px 20px;
    margin-bottom: 20px;

    margin-left: 20px;
    /* border-bottom: 2px solid #ffffff32;
    border-top: 2px solid #ffffff32; */

    .filter {
      width: auto;
      margin: 0px 10px;
      border: none;
      padding: 10px 14px;
      border-radius: 10px;
      color: white;
      font-weight: 600;
      background-color: #ffffff32;
      transition: all 400ms ease;

      /* background-color: #ff6060;
      border: 1px solid #ff6060; */
      cursor: pointer;
      :hover {
        background-color: #ffffff60;
        transition: 400ms ease;
        /* 
        background-color: white;
        color: #ff6060; */
      }
      &.open {
        background-color: #fff;
        font-weight: 600;
        color: #191919;
        /* padding: 10px 20px; */

        /* border: 1px solid #ff6060;
        color: #ff6060; */
      }
    }
  }
  .card-container {
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 100px;
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
