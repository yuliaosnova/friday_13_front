import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Btn = styled(NavLink)`
  background: transparent;
  border-radius: 5px;
  border: 1px solid;
  width: 110px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--animation);

  font-family: "Merriweather", serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 22px; /* 137.5% */
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 160px;
  }

  color: ${(props) => {
    if (props.auth) {
      return "var(--accent-cl)";
    } else if (props.start) {
      return "var(--main-txt-cl)";
    }
  }};

  border-color: ${(props) => {
    if (props.auth) {
      return "var(--accent-cl)";
    } else if (props.start) {
      return "var(--main-txt-cl)";
    }
  }};

  &:hover {
    background-color: var(--accent-cl);
    color: var(--main-txt-cl);
  }

  &:focus {
    background-color: var(--accent-cl);
    color: var(--main-txt-cl);
  }
`;
