import { Block, Button, Form, Input, Label, Title } from "./LoginFormStyle";

const LoginForm = () => {
  return (
    <>
      <Form>
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
