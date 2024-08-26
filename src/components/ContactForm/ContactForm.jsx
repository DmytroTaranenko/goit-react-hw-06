import { ErrorMessage, Formik, Form, Field } from "formik";
import * as Yup from "yup";

import css from "./ContactForm.module.css";

const INITIAL_VALUES = {
  userName: "",
  userNumber: "",
};

const phoneRegExp = /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/;

const ProfileValidationSchema = Yup.object().shape({
  userName: Yup.string()
    .required("Name is required")
    .min(3, "Too short")
    .max(50, "Too long"),
  userNumber: Yup.string()
    .matches(phoneRegExp, "Number should to use this format 'xxx-xx-xx'")
    .required("Number is required"),
});

const ContactForm = ({ onAddUserContact }) => {
  const handleSubmit = (values, actions) => {
    const contactObject = {
      name: values.userName,
      number: values.userNumber,
    };
    onAddUserContact(contactObject);
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={ProfileValidationSchema}
    >
      <Form className={css.form}>
        <label className={css.label}>
          <span>Name</span>
          <Field
            className={css.formInput}
            type="text"
            name="userName"
            placeholder=""
          />
          <ErrorMessage
            className={css.errorText}
            name="userName"
            component="span"
          />
        </label>
        <label className={css.label}>
          <span>Number</span>
          <Field
            className={css.formInput}
            type="text"
            name="userNumber"
            placeholder=""
          />
          <ErrorMessage
            className={css.errorText}
            name="userNumber"
            component="span"
          />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
