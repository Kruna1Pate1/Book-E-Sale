import React, { useEffect } from 'react';
import { useAuthContext } from '../../context/AuthContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Profile = (): JSX.Element => {

  const authContext = useAuthContext();
  const user = authContext.user;

  return (
    <>
      {typeof user.name !== 'undefined' && (
        <>
          <h2>
            Welcome {user.name.firstName} {user.name.lastName}{' '}
          </h2>
          <br />
          <br />
          <h2>Your role: {user.role.name} </h2>
          <br />
        </>
      )}
    </>
  );
};

export default Profile;
