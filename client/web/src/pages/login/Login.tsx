import React, { useEffect } from 'react';
import { Heading, Input, Button, Spacer } from '../../components';
import { LoginContainer, LeftContainer, RightContainer } from './Login.styled';
import { LoginModel } from '../../model/AuthModel';
import { useAuthContext } from '../../context/AuthContext';
import { AuthService } from '../../service';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { toast } from 'react-toastify';

const Login = (): JSX.Element => {
  const authContext = useAuthContext();
  const initialValues: LoginModel = new LoginModel();
  const navigate = useNavigate();

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .required('Email is required')
      .email('Please enter valid email'),
    password: yup
      .string()
      .required('Password is required')
      .min(6, 'Minimum 6 character required')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])/,
        'Must Contain One Uppercase, One Lowercase'
      )
      .matches(
        /^(?=.*[!@#\$%\^&\*])/,
        'Must Contain One Special Character'
      )
      .matches(/^(?=.{6,20}$)\D*\d/, 'Must Contain One Number')
  });

  const onSubmit = (values: LoginModel): void => {
    AuthService.login(values).then((res) => {
      authContext.setUser(res);
      console.log("fk");
      toast.success('Logged In Successfully!');
      navigate('/profile');
    }).catch((reason) => {
      
      toast.error('Can\'t Log In')
    });
  };

  useEffect(() => {
    if (authContext.user.userId !== undefined) {
      navigate('/profile');
    }
  }, [authContext.user]);

  const register = () => {
    navigate('/register');
  }

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
          <Button design="primary-filled" width="220px" onClick={register}>
            Create an Account
          </Button>
        </LeftContainer>

        <RightContainer>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ errors, touched }) => (
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
                  hint="example@gmail.com"
                  isError={touched.email && errors.email}
                  as={Input}
                />
                <p className="error">
                  <ErrorMessage name="email" />
                </p>

                <Spacer />
                <Field
                  name="password"
                  id="password"
                  label="Password *"
                  type="password"
                  hint="Strong@531#"
                  isError={touched.password && errors.password}
                  as={Input}
                />
                <p className="error">
                  <ErrorMessage name="password" />
                </p>

                <Spacer height="40px" />
                <Button type="submit" design="primary-filled" width="100px">
                  Login
                </Button>
              </Form>
            )}
          </Formik>
        </RightContainer>
      </LoginContainer>
    </>
  );
};

export default Login;
