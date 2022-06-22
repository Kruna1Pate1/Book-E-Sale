import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserModel } from '../model/UserModel';
import Constants from '../utils/Constants';
import { request } from '../service';

export interface AuthContextModel {
  setUser: (user: UserModel) => void;
  user: UserModel;
  signOut: () => void;
  // appInitialize: boolean;
}

const initialState: AuthContextModel = {
  setUser: () => {},
  user: new UserModel(),
  signOut: () => {}
  // appInitialize: false
};

export const AuthContext = createContext<AuthContextModel>(initialState);

export const AuthProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children
}: React.PropsWithChildren<{}>) => {
  // const [appInitialize, setAppInitialize] = useState<boolean>(false);
  const [user, _setUser] = useState<UserModel>(new UserModel());

  const navigate = useNavigate();

  const setUser = (user1: UserModel): void => {
    localStorage.setItem(
      Constants.LocalStorageKeys.USER,
      JSON.stringify(user1)
    );
    _setUser(user1);
  };

  useEffect(() => {
    const itemStr: UserModel =
      (JSON.parse(
        localStorage.getItem(Constants.LocalStorageKeys.USER) as string
      ) as UserModel) || new UserModel();
    if (!itemStr.userId) {
      navigate('/login');
    }
    _setUser(itemStr);
    request.defaults.headers.common = {
      Authorization: `Bearer ${user.jwtToken}`
    };
    // console.log(request.defaults.headers);
  }, [user.jwtToken]);

  const signOut = (): void => {
    setUser(new UserModel());
    localStorage.removeItem(Constants.LocalStorageKeys.USER);
    navigate('/login');
  };

  let value: AuthContextModel = {
    user,
    setUser,
    signOut
    // appInitialize
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
