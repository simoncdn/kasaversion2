import styled from "styled-components";
import { LodgingIndoProps } from "../../../utils/type";
import Rating from "./Rating";

export default function LodgingInfo({
  title,
  location,
  tags,
  host,
  rating,
}: LodgingIndoProps) {
  return (
    <LodgingInfoStyled>
      <div className="lodging-info-left">
        <h2>{title}</h2>
        <p>{location}</p>

        <div className="tags-container">
          <ul>
            {tags.map((element, index) => (
              <li key={index} className="tag">
                {element}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="lodging-info-right">
        <div className="lodging-info-right-host">
          <p>{host.name}</p>
          <img src={host.picture} alt="host img" />
        </div>
        <div>
          <Rating rating={rating} />
        </div>
      </div>
    </LodgingInfoStyled>
  );
}

const LodgingInfoStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  margin-bottom: 30px;
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
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
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
  }
`;
