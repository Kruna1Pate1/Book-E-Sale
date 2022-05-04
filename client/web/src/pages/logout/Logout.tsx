import React, { useEffect } from 'react';
import { useAuthContext } from '../../context/AuthContext';

const Logout = (): JSX.Element => {
  const authContext = useAuthContext();

  useEffect(() => {
    authContext.signOut();
  }, []);

  return (
    <>
      <h2>Logging Out ...</h2>
    </>
  );
};

export default Logout;
