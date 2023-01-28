import styled from "styled-components";

export default function Footer() {
  return (
    <FooterStyled>
      <div className="footer-logo">
        <img src="/Images/logo.svg" alt="logo Kasa" />
      </div>
      <p>© 2020 Kasa. All rights reserved</p>
    </FooterStyled>
  );
}

const FooterStyled = styled.div`
  width: 100%;
  height: 200px;
  background-color: black;
  padding: 50px 0px 30px 0px;
  text-align: center;

  .footer-logo img {
    filter: brightness(10);
    max-width: 130px;
  }
  p {
    color: white;
    font-size: 24px;
    font-weight: 100;
    margin-top: 30px;
  }

  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
    height: 120px;
    padding: 30px 0px 20px 0px;

    .footer-logo img {
      width: 90px;
    }
    .footer-container p {
      font-size: 12px;
      margin-top: 10px;
    }
  }
`;
