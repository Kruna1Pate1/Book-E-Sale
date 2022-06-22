import React, { useEffect } from 'react';
import { Heading, Input, Button, Spacer } from '../../components';
import { LoginContainer, LeftContainer, RightContainer } from './Login.styled';
import { LoginModel } from '../../model/AuthModel';
import { useAuthContext } from '../../context/AuthContext';
import { AuthService } from '../../service';
import { Formik, Form, Field } from 'formik';
import { useNavigate } from 'react-router-dom';

const Login = (): JSX.Element => {
  const authContext = useAuthContext();
  const initialValues: LoginModel = new LoginModel();
  const navigate = useNavigate();

  const onSubmit = (values: LoginModel): void => {
    AuthService.login(values).then((res) => {
      authContext.setUser(res);
      console.log(res);
      navigate('/profile');
    });
  };

  useEffect(() => {
    if (authContext.user.userId !== undefined) {
      navigate('/profile');
    }
  }, [authContext.user]);

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
          <Button design="primary-filled" width="220px">
            Create an Account
          </Button>
        </LeftContainer>

        <RightContainer>
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            <Form>
              <h3>Registered Customer</h3>
              <hr />
              <span className="hint">
                If you have an account with us, please log in.
              </span>

              <Field
                name="email"
                id="email"
                label="Email Address *"
                type="email"
                as={Input}
              />

              <Spacer />
              <Field
                name="password"
                id="password"
                label="Password *"
                type="password"
                as={Input}
              />

              <Spacer height="40px" />
              <Button type="submit" design="primary-filled" width="100px">
                Login
              </Button>
            </Form>
          </Formik>
        </RightContainer>
      </LoginContainer>
    </>
  );
};

export default Login;
