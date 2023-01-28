import styled from "styled-components";
import { BannerProps } from "../../../utils/type";

export default function Banner({ image, title }: BannerProps) {
  return (
    <BannerStyled>
      <div className="background">
        <img src={image} alt="mountain" />
        <h2>{title}</h2>
      </div>
    </BannerStyled>
  );
}

const BannerStyled = styled.div`
  width: 100%;
  height: 250px;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 40px 0px;
  padding: 0 100px;
  .background {
    width: 100%;
    height: 100%;
    background-color: black;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    mix-blend-mode: darken;
  }

  .background img {
    opacity: 0.7;
    position: relative;
    top: 45%;
    width: 100%;
  }

  h2 {
    position: absolute;
    color: white;
    font-weight: 400;
    font-size: 48px;
    padding: 30px;
  }

  @media screen and (max-width: 1024px) {
    height: 200px;
    margin: 20px 0px;
    padding: 0 50px;
    h2 {
      font-size: 36px;
    }
  }
  @media screen and (max-width: 768px) {
    height: 120px;
    padding: 0 20px;

    h2 {
      font-size: 24px;
      display: flex;
      flex-wrap: wrap;
    }
  }
`;
