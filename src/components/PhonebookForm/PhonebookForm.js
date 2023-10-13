import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const PhonebookSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.number()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

export const PhonebookForm = ({onAdd}) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={PhonebookSchema}
      onSubmit={(values, actions) => {
       onAdd(values);
        actions.resetForm();
      }}
    >
      <Form>
        <label>Name</label>
        <Field type="text" name="name" placeholder="Name" />
        <ErrorMessage name="name"/>

        <label htmlFor="lastName">Number</label>
        <Field type="number" name="number" placeholder="Number" />
        <ErrorMessage name="number"/>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
