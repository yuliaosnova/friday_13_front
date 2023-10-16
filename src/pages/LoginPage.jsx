import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import {
  Container,
  FormBlock,
  StyledLink,
  Text,
  TextBlock,
} from "./PagesStyle";
import LoginForm from "../components/LoginForm/LoginForm";

const LoginPage = () => {
  return (
    <Container>
      <FormBlock>
        <LoginForm />
      </FormBlock>

      <TextBlock>
        <Text>Don’t have account?</Text>
        <StyledLink to="/register">Sign Up</StyledLink>
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

export default LoginPage;
