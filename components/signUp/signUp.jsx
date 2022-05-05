import {Formik, Form, Field, ErrorMessage} from 'formik';

import signInSchema from '../../utils/validation/signin';
import './signUp.module.scss';

const SignUp = () => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={signInSchema}
      onSubmit={() => {}}
    >
      <Form>
        <label htmlFor="email">Email</label>
        <Field name="email" id="email" />
        <ErrorMessage name="email" />
        <label htmlFor="password">Password</label>
        <Field name="password" id="password" />
        <ErrorMessage name="password" />
      </Form>
    </Formik>
  );
};

export default SignUp;
