import React from 'react';
import {
  RoleService,
  UserService,
  CategoryService,
  BookService
} from '../../service';

const Profile = (): JSX.Element => {

  const onClick = () => {
    // UserService.getAll().then((res) => {
    //   console.log(res);
    // });
    BookService.getByName("a").then((res) => {
      console.log(res);
    })
  };

  return (
    <>
      <h2>Check Console :P </h2>
      <br />
      <br />
      <button onClick={onClick}>Click Me</button>
    </>
  );
};

export default Profile;
