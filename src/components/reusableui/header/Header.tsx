import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { ArrNav } from "../../../utils/type";

export default function Header() {
  const location = useLocation();

  const arrNav: ArrNav = [
    {
      label: "Accueil",
      id: "home",
      path: "/",
    },
    {
      label: "A propos",
      id: "about",
      path: "/about",
    },
  ];

  return (
    <HeaderStyled>
      <div className="logo-container">
        <img src="/Images/logo.svg" alt="logo Kasa" />
      </div>
      <div className="navbar">
        {arrNav.map((item, index) => {
          return (
            <Link
              className={
                location.pathname === item.path ? "selected" : "unselected"
              }
              key={index}
              id={`${item.id}`}
              to={`${item.path}`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.div`
  color: #ff6060;
  width: 100%;
  display: flex;
  position: relative;
  justify-content: space-between;
  margin-top: 40px;
  padding: 0 40px;
  .logo-container img {
    width: 60%;
  }
  .navbar {
    display: flex;
    width: auto;
    justify-content: space-between;
    align-items: center;
    margin-right: 0px;
    a {
      text-transform: none;
      list-style-type: none;
      font-size: 18px;
      margin-left: 100px;
      color: #ff6060;
      &:visited {
        color: #ff6060;
      }
      &.unselected {
        text-decoration: none;
      }
      &.selected {
        text-decoration: underline;
      }
    }
    a:hover {
      text-decoration: underline;
    }
  }

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
  }
`;
