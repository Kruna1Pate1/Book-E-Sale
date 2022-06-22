import React, { useEffect } from 'react';
import { Button, Heading, Input, Spacer } from '../../components';
import { RegisterContainer, RowContainer } from './Register.styled';
import { RegisterModel } from '../../model/AuthModel';
import { useAuthContext } from '../../context/AuthContext';
import { AuthService } from '../../service';
import { Formik, Form, Field } from 'formik';
import { useNavigate } from 'react-router-dom';

const Register = (): JSX.Element => {
  const authContext = useAuthContext();
  const initialValues: RegisterModel = new RegisterModel();
  const navigate = useNavigate();

  const onSubmit = (values: RegisterModel): void => {
    AuthService.register(values).then((res) => {
      // authContext.setUser(res);
      console.log(res);
      navigate('/login');
    });
    console.log(values);
  };

  useEffect(() => {
    if (authContext.user.userId !== undefined) {
      navigate('/profile');
    }
  }, [authContext.user]);

  return (
    <>
      <Heading>Login or Create anAccount</Heading>
      <RegisterContainer>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          <Form>
            <h3>Personal Information</h3>
            <hr />
            <span className="hint">
              Please enter the following information to create your account.
            </span>
            <RowContainer>
              <Field
                name="name.firstName"
                id="name.firstName"
                label="First Name *"
                as={Input}
              />
              <Field
                name="name.lastName"
                id="name.lastName"
                label="Last Name *"
                as={Input}
              />
            </RowContainer>
            <Spacer />
            <Field
              name="email"
              id="email"
              label="Email Address *"
              type="email"
              as={Input}
            />
            <Spacer height="70px" />
            <h3 className="row-container">Login Information</h3>
            <hr />
            <RowContainer>
              <Field
                name="password"
                id="password"
                label="Password *"
                type="password"
                as={Input}
              />
              <Field
                name="confirmPassword"
                id="confirmPassword"
                label="Confirm Password *"
                type="password"
                as={Input}
              />
            </RowContainer>
            <Spacer height="60px" width="2px" />

            <Button design="primary-filled">Register</Button>
          </Form>
        </Formik>
      </RegisterContainer>
    </>
  );
};

export default Register;
