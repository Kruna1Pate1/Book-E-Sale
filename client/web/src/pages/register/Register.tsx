import React, { useEffect, useState } from 'react';
import { Button, Heading, Input, Spacer } from '../../components';
import { RegisterContainer, RowContainer } from './Register.styled';
import { RegisterModel } from '../../model/AuthModel';
import { useAuthContext } from '../../context/AuthContext';
import { AuthService } from '../../service';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { Role } from '../../utils/Enum';
import { StyledLabel } from '../../components/input/Input.style';
import { MySelect } from '../../components/select';

const Register = (): JSX.Element => {
  const authContext = useAuthContext();
  const initialValues: RegisterModel = new RegisterModel();
  const navigate = useNavigate();

  const roles = [
    { label: 'Admin', value: Role.Admin },
    { label: 'Seller', value: Role.Seller },
    { label: 'Buyer', value: Role.Buyer }
  ];

  const validationSchema = yup.object().shape({
    name: yup.object().shape({
      firstName: yup
        .string()
        .required('First Name is required')
        .min(2, 'Please enter valid name'),

      lastName: yup
        .string()
        .required('Last Name is required')
        .min(2, 'Please enter valid name')
    }),

    email: yup
      .string()
      .required('Email is required')
      .email('Please enter valid email'),

    role: yup.string().required('Role is required'),

    password: yup
      .string()
      .required('Password is required')
      .min(6, 'Minimum 6 character required')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])/,
        'Must Contain One Uppercase, One Lowercase'
      )
      .matches(/^(?=.*[!@#\$%\^&\*])/, 'Must Contain One Special Character')
      .matches(/^(?=.{6,20}$)\D*\d/, 'Must Contain One Number'),

    confirmPassword: yup
      .string()
      .required('Password is required')
      .oneOf([yup.ref('password')], 'Your passwords do not match.')
  });

  const onSubmit = (values: RegisterModel): void => {
    console.log(values);
    AuthService.register(values)
      .then((res) => {
        console.log(res);
        toast.success('Registration successful!');
        navigate('/login');
      })
      .catch((reason) => {
        toast.error("Can't Register!");
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
      <Heading>Login or Create an Account</Heading>
      <RegisterContainer>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ setFieldValue, errors, touched }) => (
            <Form>
              <h3>Personal Information</h3>
              <hr />
              <span className="hint">
                Please enter the following information to create your account.
              </span>

              <RowContainer>
                <div className="field">
                  <Field
                    name="name.firstName"
                    id="name.firstName"
                    label="First Name *"
                    hint="First name"
                    isError={touched.name?.firstName && errors.name?.firstName}
                    as={Input}
                  />
                  <p className="error">
                    <ErrorMessage name="name.firstName" />
                  </p>
                </div>

                <div className="field">
                  <Field
                    name="name.lastName"
                    id="name.lastName"
                    label="Last Name *"
                    hint="Last name"
                    isError={touched.name?.lastName && errors.name?.lastName}
                    as={Input}
                  />
                  <p className="error">
                    <ErrorMessage name="name.lastName" />
                  </p>
                </div>
              </RowContainer>
              <Spacer />

              <RowContainer>
                <div className="field">
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
                </div>

                <div className="field">
                  <MySelect
                    name="role"
                    id="role"
                    label="Role *"
                    className="role"
                    options={roles}
                    onChange={(e: any) => {
                      setFieldValue('role', e?.value);
                    }}
                  />
                </div>
              </RowContainer>

              <Spacer height="70px" />
              <h3 className="row-container">Login Information</h3>
              <hr />

              <RowContainer>
                <div className="field">
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
                </div>

                <div className="field">
                  <Field
                    name="confirmPassword"
                    id="confirmPassword"
                    label="Confirm Password *"
                    type="password"
                    hint="Strong@531#"
                    isError={touched.confirmPassword && errors.confirmPassword}
                    as={Input}
                  />
                  <p className="error">
                    <ErrorMessage name="confirmPassword" />
                  </p>
                </div>
              </RowContainer>

              <Spacer height="60px" width="2px" />

              <Button design="primary-filled">Register</Button>
            </Form>
          )}
        </Formik>
      </RegisterContainer>
    </>
  );
};

export default Register;
