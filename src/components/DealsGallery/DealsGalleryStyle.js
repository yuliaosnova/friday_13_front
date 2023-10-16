import styled from "styled-components";

export const Container = styled.div`
  width: 480px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;

export const Title = styled.h2`
  color: var(--accent-cl);
  font-family: "Merriweather", serif;
  font-size: 28px;
  font-weight: 700;
  line-height: 34px; /* 121.429% */
  margin-top: 50px;
  margin-bottom: 20px;
`;

export const ImagesList = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  gap: 20px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;

export const ImageItem = styled.li`
  position: relative;
`;

export const Image = styled.img`
  width: 400px;
  height: 300px;

  @media screen and (min-width: 768px) {
    width: 630px;
    height: 400px;
  }
`;

export const InfoContainer = styled.div`
  width: 350px;
  position: absolute;
  bottom: 20px;
  left: 14px;

  @media screen and (min-width: 768px) {
    width: 400px;
  }
`;

export const InfoTitle = styled.h3`
  color: var(--main-txt-cl);

  font-family: "Merriweather", serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 34px; /* 170% */
  margin-bottom: 8px;
`;

export const NumbersBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const InfoText = styled.p`
  color: var(--main-txt-cl);
  font-family: "Lato", sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 22px; /* 122.222% */

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;
