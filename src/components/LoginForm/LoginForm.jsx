import { useDispatch } from "react-redux";

import { loginUser } from "../../redux/auth/authOperations";

import { Block, Button, Form, Input, Label, Title } from "./LoginFormStyle";

const LoginForm = () => {
	const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      loginUser({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Title>Login</Title>
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

        <Button type="submit">Sign In</Button>
      </Form>
    </>
  );
};

export default LoginForm;
