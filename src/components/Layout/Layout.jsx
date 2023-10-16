import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Btn } from "../Button/ButtonStyle";
import { Header, Nav } from "./Layout.style";

export const Layout = () => {
  return (
    <>
      <Header>
        <Nav>
          <Btn auth to="/login">
            Log In
          </Btn>
          <Btn auth to="/register">
            Sign Up
          </Btn>
        </Nav>
      </Header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <footer></footer>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};
