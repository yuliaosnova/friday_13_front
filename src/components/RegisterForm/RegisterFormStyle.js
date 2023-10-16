import styled from "styled-components";

export const Form = styled.form`
  font-family: "Lato", sans-serif;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 350px;
  margin: 0 auto;
  margin-top: 20%;

  @media screen and (min-width: 1280px) {
    margin-top: 0;
    position: absolute;
    top: 25%;
    left: 65%;
  }
`;

export const Title = styled.h3`
  color: var(--secondary-txt-cl);
  font-family: "Merriweather", serif;
  font-size: 28px;
  font-weight: 700;
  line-height: 34px; /* 121.429% */
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Label = styled.label`
  color: var(--secondary-txt-cl);
  font-family: "Merriweather", serif;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 142.857% */
`;

export const Input = styled.input`
  width: 330px;
  height: 48px;

  border-radius: 5px;
  border: none;
  background-color: #e0e0e0;

  margin: 0 auto;
  padding-left: 20px;

  font-size: 14px;
  line-height: 22px; /* 157.143% */
  transition: var(--animation);

  &::placeholder {
    font-size: 14px;
    opacity: 0.8;
  }

  &:focus,
  :hover {
    border-color: var(--white-color);
    outline: 0;
    opacity: 1;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 44px;
  margin-top: 20px;
  background-color: var(--accent-cl);
  color: var(--main-txt-cl);
  font-family: "Merriweather", serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 22px; /* 137.5% */
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: var(--animation);

  &:hover {
    opacity: 0.7;
  }
`;
