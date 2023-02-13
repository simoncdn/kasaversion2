import Footer from "../../reusableui/Footer";
import Header from "../../reusableui/header/Header";
import styled from "styled-components";
import LodgingContent from "./LodgingContent";

export default function Lodging() {
  return (
    <LodgingStyled>
      <Header />
      <LodgingContent />
      <Footer />
    </LodgingStyled>
  );
}

const LodgingStyled = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  padding: 0px 50px;
  align-items: center;
  padding-bottom: 250px;

  /* @media screen and (max-width: 1024px) {
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
    } */
`;
