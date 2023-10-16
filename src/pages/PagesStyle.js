import styled from "styled-components";
import AuthImage from "../assets/register_img.jpg";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  @media screen and (min-width: 1280px) {
    width: 50%;
    height: 100vh;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-color: var(--hero-bg);
    background-image: url(${AuthImage});
  }
`;

export const Picture = styled.div`
  width: 890px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${AuthImage});
`;

export const FormContainer = styled.div`
  margin: 0 auto;
`;

export const StyledLink = styled(NavLink)`
  color: var(--accent-cl);
  font-family: "Lato", sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;

  &:focus,
  :hover {
    opacity: 0.7;
  }
`;

export const TextBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;

  @media screen and (min-width: 1280px) {
    margin-top: 0;
    position: absolute;
    top: 70%;
    left: 70%;
  }

  @media screen and (min-width: 1600px) {
    margin-top: 0;
    position: absolute;
    top: 60%;
    left: 70%;
  }
`;

export const FormBlock = styled.div`
  margin: 0 auto;
`;

export const Text = styled.p`
  font-family: "Lato", sans-serif;
  font-size: 14px;
  font-weight: 600;
  margin-right: 4px;
`;
