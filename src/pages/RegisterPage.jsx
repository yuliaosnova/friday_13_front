// import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

import RegisterForm from "../components/RegisterForm/RegisterForm";
import {
  Container,
  FormBlock,
  StyledLink,
  Text,
  TextBlock,
} from "./PagesStyle";

const RegisterPage = () => {
  // const { fetchError } = useSelector(selectAuth);

  // useEffect(() => {
  //   if (!fetchError) return;
  //   if (fetchError === 409)
  // 	 toast.error('Email is already used!');
  //   if (fetchError === 400 || fetchError === 500)
  // 	 toast.error('Something went wrong:(');
  // }, [fetchError]);

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
