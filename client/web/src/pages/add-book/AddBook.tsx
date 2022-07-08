import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { Button, Heading, Input, Spacer } from '../../components';
import { useAuthContext } from '../../context/AuthContext';
import { AddBookModel } from '../../model/BookModel';
import { Category, Role } from '../../utils/Enum';
import { AddBookContainer, RowContainer } from './AddBook.styled';
import { toast } from 'react-toastify';
import { MySelect } from '../../components/select';
import { convertBase64 } from '../../utils/Constants';
import { BookService } from '../../service';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';

const AddBook = (): JSX.Element => {
  const authContext = useAuthContext();
  const user = authContext.user;
  const navigate = useNavigate();

  const initialValues: AddBookModel = new AddBookModel();

  useEffect(() => {
    
    if (typeof user.userId !== 'undefined' && user.role.roleId === Role.Buyer) {
      toast.error('You are not authorized!');
      navigate('/profile');
    }
  }, [authContext]);

  const categories = [
    { label: 'FICTION', value: Category.FICTION },
    { label: 'MYSTERY', value: Category.MYSTERY },
    { label: 'THRILLER', value: Category.THRILLER },
    { label: 'HORROR', value: Category.HORROR },
    { label: 'HISTORICAL', value: Category.HISTORICAL },
    { label: 'ROMANCE', value: Category.ROMANCE },
    { label: 'SCI-FI', value: Category.SCIFI },
    { label: 'FANTASY', value: Category.FANTASY }
  ];

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .required('Name is required')
      .min(2, 'Please enter valid name'),

    price: yup
      .number()
      .required('Price is required')
      .positive("Price can't be negative"),

    category: yup.string().required('Category is required')
  });

  const onSubmit = (values: AddBookModel, resetForm: () => void): void => {
    BookService.add(values)
      .then((res) => {
        console.log(res);
        toast.success('Book Added successful!');
        resetForm();
      })
      .catch((reason) => {
        toast.error("Can't Add!");
      });
  };

  return (
    <>
      <Heading>Add Book</Heading>

      <AddBookContainer>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => onSubmit(values, resetForm)}
        >
          {({ setFieldValue, errors, touched }) => (
            <Form>
              <h3>Book Information</h3>
              <hr />
              <span className="hint">
                Please enter the following information to add book.
              </span>

              <RowContainer>
                <div className="field">
                  <Field
                    name="name"
                    id="name"
                    label="Book Name *"
                    hint="Book name"
                    isError={touched.name && errors.name}
                    as={Input}
                  />
                  <p className="error">
                    <ErrorMessage name="name" />
                  </p>
                </div>

                <div className="field">
                  <Field
                    name="price"
                    id="price"
                    label="Book Price *"
                    hint="500"
                    type="number"
                    isError={touched.price && errors.price}
                    as={Input}
                  />
                  <p className="error">
                    <ErrorMessage name="price" />
                  </p>
                </div>
              </RowContainer>

              <Spacer />

              <RowContainer>
                <div className="field">
                  <MySelect
                    name="category"
                    id="category"
                    label="Category"
                    options={categories}
                    onChange={(e: any) => {
                      setFieldValue('category', e?.value);
                    }}
                  />
                </div>
                <div className="field">
                  <Field
                    name="description"
                    id="description"
                    label="Description"
                    hint="This book contains mysterious..."
                    isError={touched.description && errors.description}
                    as={Input}
                  />
                  <p className="error">
                    <ErrorMessage name="description" />
                  </p>
                </div>
              </RowContainer>

              <Spacer />

              <div className="field">
                <Input
                  name="base64image"
                  id="base64image"
                  label="Book Image"
                  type="file"
                  onChange={(e: any) => {
                    convertBase64(e.target.files[0]).then((base64) => {
                      setFieldValue('base64image', base64);
                    });
                  }}
                />
                <p className="error">
                  <ErrorMessage name="description" />
                </p>
              </div>
              <Spacer height="60px" width="2px" />

              <Button design="primary-filled">Add</Button>
            </Form>
          )}
        </Formik>
      </AddBookContainer>
    </>
  );
};

export default AddBook;
