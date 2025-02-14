import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

const ContactForm = () => {
  const dispatch = useDispatch();
  const phoneRegExp = /(^\d{3}-\d{2}-\d{2}$)|(^\+\d{2}-\d{3}-\d{3}-\d{4}$)/;

  const phonebookSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Name is required"),
    number: Yup.string()
      .matches(phoneRegExp, "Must be in format 000-00-00 or +00-000-000-0000")
      .required("Phone number is required"),
  });

  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        id: nanoid(),
        name: values.name,
        number: values.number,
      })
    );
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={phonebookSchema}
    >
      <Form className={css.form}>
        <div className={css.fieldWrapper}>
          <label htmlFor="name" className={css.label}>
            Name
          </label>
          <Field
            className={css.field}
            type="text"
            name="name"
            id="name"
          ></Field>
          <ErrorMessage name="name" component="p" className={css.error} />
        </div>
        <div className={css.fieldWrapper}>
          <label htmlFor="number" className={css.label}>
            Number
          </label>
          <Field
            className={css.field}
            type="text"
            name="number"
            id="number"
          ></Field>
          <ErrorMessage name="number" component="p" className={css.error} />
        </div>
        <button type="submit" className={css.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
