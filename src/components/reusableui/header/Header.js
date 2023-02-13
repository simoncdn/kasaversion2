import styled from "styled-components";
import Navbar from "./navbar/Navbar";
export default function Header() {
  return (
    <HeaderStyled>
      <div className="logo-container">
        <img src="/Images/logo.svg" alt="logo Kasa" />
      </div>

      <Navbar />
    </HeaderStyled>
  );
}

const HeaderStyled = styled.div`
  background-color: #191919;
  width: 100%;
  display: flex;
  position: fixed;
  justify-content: space-between;
  padding: 25px 50px;
  border-bottom: 2px solid #ffffff32;
  z-index: 20;
  .logo-container {
    display: flex;
    align-items: center;
    img {
      width: 50%;
    }
  }
  /* 
  @media screen and (max-width: 1024px) {
    padding: 0 50px;
    .navbar a {
      font-size: 20px;
      margin-left: 70px;
    }
  }
  @media screen and (max-width: 768px) {
    margin-top: 20px;
    padding: 0 20px;
    .logo-container img {
      width: 80%;
    }
    .navbar a {
      width: 50px;
      font-size: 12px;
      margin-left: 30px;
    }
  } */
`;
