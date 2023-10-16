import { useSelector } from "react-redux";
import { useEffect } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

import RegisterForm from "../components/RegisterForm/RegisterForm";
import { getError } from "../redux/auth/authSelectors";

import {
  Container,
  FormBlock,
  StyledLink,
  Text,
  TextBlock,
} from "./PagesStyle";

const RegisterPage = () => {
  const isError = useSelector(getError);

  useEffect(() => {
    if (!isError) return;
    toast.error(
      "Something went wrong:( Check email and password and try again"
    );
  }, [isError]);

  return (
    <Container>
      <FormBlock>
        <RegisterForm />
      </FormBlock>

      <TextBlock>
        <Text>Do you have account?</Text>
        <StyledLink to="/login">Sign In</StyledLink>
      </TextBlock>

      <ToastContainer
        position="top-right"
        autoClose={6000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Container>
  );
};

export default RegisterPage;
