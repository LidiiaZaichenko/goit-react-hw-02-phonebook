import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const PhonebookSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .matches(/(^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$)/, { message:'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d`Artagnan' , excludeEmptyString: true })
    .required('Required'),
  number: Yup.string()
    .min(2, 'Too Short!')
    .max(13, 'Too Long!')
    .required('Required')
    .matches(/(\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9})/, { message:'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +', excludeEmptyString: true }),
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
        <Field type="tel" name="number" placeholder="Number" />
        <ErrorMessage name="number"/>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
