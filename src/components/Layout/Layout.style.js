import styled from "styled-components";

export const Header = styled.header`
  font-size: 18px;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  background-color: var(--header-bg);
  width: 100%;
  height: 80px;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 100%;
  font-size: 11px;
  margin-right: 80px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
  }
`;
