import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "react-toastify/dist/ReactToastify.css";

import { getIsLoggedIn } from "../../redux/auth/authSelectors";
import { logOut } from "../../redux/auth/authSlice";

import { Btn } from "../Button/ButtonStyle";
import { Header, Nav } from "./Layout.style";

export const Layout = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector(getIsLoggedIn);

  function clickHandler() {
    dispatch(logOut());
  }

  return (
    <>
      <Header>
        <Nav>
          {isLogged ? (
            <Btn auth onClick={clickHandler}>
              Sign OUT
            </Btn>
          ) : (
            <>
              <Btn auth to="/login">
                Log In
              </Btn>
              <Btn auth to="/register">
                Sign Up
              </Btn>
            </>
          )}
        </Nav>
      </Header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <footer></footer>
    </>
  );
};
