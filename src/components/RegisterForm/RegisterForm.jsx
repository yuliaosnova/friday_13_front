import { useDispatch } from "react-redux";

import { registerUser } from "../../redux/auth/authOperations";

import { Block, Button, Form, Input, Label, Title } from "./RegisterFormStyle";

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      registerUser({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Title>Register</Title>
        <Block>
          <Label>Email</Label>
          <Input type="email" name="email" placeholder="Email" required />
        </Block>
        <Block>
          <Label>Password</Label>
          <Input
            type="password"
            name="password"
            minLength="6"
            placeholder="Password"
            required
          />
        </Block>
        <Button type="submit">Sign Up</Button>
      </Form>
    </>
  );
};

export default RegisterForm;
