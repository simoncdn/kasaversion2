import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Rating({ rating }) {
  const [ratingValue, setRatingValue] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    const ratingStars = parseInt(`${rating}`);
    const newRate = [...ratingValue];

    for (let i = 0; i < ratingStars; i++) {
      newRate[i] = true;
    }
    setRatingValue(newRate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rating]);

  return (
    <RatingStyled>
      {ratingValue.map((rate, index) => {
        return (
          <svg
            key={index}
            className={rate ? "star-red" : "star-grey"}
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" />
          </svg>
        );
      })}
    </RatingStyled>
  );
}

const RatingStyled = styled.div`
  .star {
    width: 40px;
    margin-left: 10px;
  }
  .star-grey {
    fill: #636262c5;
    width: 40px;
    margin-left: 10px;
  }
  .star-red {
    fill: white;
    width: 40px;
    margin-left: 10px;
  }

  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
    .star-grey {
      width: 15px;
      margin-left: 0px;
    }
    .star-red {
      width: 15px;
      margin-left: 0px;
      margin-right: 5px;
    }
  }
`;
