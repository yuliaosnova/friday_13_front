import styled from "styled-components";
import HeroPic from "../../assets/hero.jpg";

export const Container = styled.section`
  text-align: center;
  padding-top: 297px;
  padding-bottom: 377px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: var(--hero-bg);
  background-image: linear-gradient(
      to right,
      rgb(23 34 55 / 40%),
      rgb(23 27 63 / 40%)
    ),
    url(${HeroPic});
`;

export const Title = styled.h1`
  color: var(--main-txt-cl);
  font-family: "Merriweather", serif;
  font-size: 34px;
  font-weight: 700;
  line-height: 80px; /* 125% */

  @media screen and (min-width: 768px) {
    font-size: 64px;
  }
`;

export const TextContainer = styled.p`
  width: 350px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    width: 700px;
  }

  @media screen and (min-width: 1280px) {
    width: 822px;
  }
`;

export const Text = styled.p`
  color: var(--main-txt-cl);
  font-family: "Lato", sans-serif;
  font-size: 16px;
  line-height: 32px; /* 133.333% */
  letter-spacing: -0.48px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;
