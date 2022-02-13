import React from 'react';
import { Heading, Input, Button, Spacer } from '../../components';
import { LoginContainer, LeftContainer, RightContainer } from './Login.styled';

const Login = (): JSX.Element => {
  return (
    <>
      <Heading>Login or Create an Account</Heading>
      <LoginContainer>
        <LeftContainer>
          <h3>New Customer</h3>
          <hr />
          <span className="hint">Registration is free and easy.</span>
          <ul>
            <li>Faster Checkout</li>
            <li>Save multiple shipping addresses</li>
            <li>View and track orders and more</li>
          </ul>
          <Button type="primary-filled" width="220px">
            Create an Account
          </Button>
        </LeftContainer>
        <RightContainer>
          <h3>Registered Customer</h3>
          <hr />
          <span className="hint">
            If you have an account with us, please log in.
          </span>
          <Input id="email" label="Email Address *" type="email" />
          <Spacer />
          <Input id="password" label="Password *" type="password" />
          <Spacer height="40px" />
          <Button type="primary-filled" width="100px">
            Login
          </Button>
        </RightContainer>
      </LoginContainer>
    </>
  );
};

export default Login;
