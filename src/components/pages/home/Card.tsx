import { Link } from "react-router-dom";
import styled from "styled-components";
import { Cardprops } from "../../../utils/type";

export default function Card({ id, cover, title }: Cardprops) {
  return (
    <CardStyled
      to={`logements/${id}`}
      className="card"
      style={{ backgroundImage: `url(${cover})`, backgroundSize: "cover" }}
    >
      <div className="card-linearGradient"></div>
      <div className="card-title">
        <h2>{title}</h2>
      </div>
    </CardStyled>
  );
}

const CardStyled = styled(Link)`
  width: 28%;
  min-width: 300px;
  height: 340px;
  border-radius: 10px;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  position: relative;
  margin: 1.2rem;
  transition: all 0.4ms;

  .card-linearGradient {
    cursor: pointer;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, #ffff 0%, rgb(0, 0, 0) 100%);
    opacity: 0.2;
    position: absolute;
  }
  .card-linearGradient:nth-child(10) {
    display: none;
  }
  .card-title {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    height: 30%;
    padding: 30px;
    position: relative;
    align-items: center;
    justify-content: left;
  }
  .card-title h2 {
    position: absolute;
    font-size: 18px;
    padding-right: 20px;
    color: #ffff;
    font-style: medium;
  }

  @media screen and (max-width: 1024px) {
    .card {
      width: 40%;
      min-width: 250px;
      height: 300px;
      margin: 15px;
      transition: all 0.4ms;
    }
  }
  @media screen and (max-width: 768px) {
    .card {
      width: 100%;
      height: 310px;
      margin: 0px 0px 20px 0px;
    }
  }
`;
