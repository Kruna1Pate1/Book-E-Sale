import React from 'react';
import { Button, Heading, Input, Spacer } from '../../components';
import { RegisterContainer, RowContainer } from './Register.styled';

const Register = (): JSX.Element => {
  return (
    <>
      <Heading>Login or Create anAccount</Heading>
      <RegisterContainer>
        <h3>Personal Information</h3>
        <hr />
        <span className="hint">
          Please enter the following information to create your account.
        </span>
        <RowContainer>
          <Input id="fname" label="First Name *" />
          <Input id="lname" label="Last Name *" />
        </RowContainer>
        <Spacer />
        <Input id="email" label="Email Address *" type="email" />
        <Spacer height="70px" />
        <h3 className="row-container">Login Information</h3>
        <hr />
        <RowContainer>
          <Input id="pass" label="Password *" type="password" />
          <Input id="cpass" label="Confirm Password *" type="password" />
        </RowContainer>
        <Spacer height="60px" width="2px" />

        <Button type="primary-filled">Register</Button>
      </RegisterContainer>
    </>
  );
};

export default Register;
