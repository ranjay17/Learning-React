import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import "./App.css";

function App() {
  const validateSchema = Yup.object({
    email: Yup.string().email("Invalid Email").required("Email is required"),
    password: Yup.string()
      .min(6, "password must be atleast 6 charactors")
      .required("Password is required"),
  });
  const initialValues = {
    email: "",
    password: "",
  };
  const handleSubmit = (values, { resetForm }) => {
    console.log("value:", values);
    alert("Form Submitted");
    resetForm();
  };
  return (
    <>
      <div>
        <h1>Simple Login Form</h1>
        <Formik
          validationSchema={validateSchema}
          initialValues={initialValues}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div>
                <label htmlFor="email">Email</label>
                <Field name="email" type="email" id="email" />
                <ErrorMessage name="email" component="p" />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <Field name="password" id="password" type="password" />
                <ErrorMessage name="password" component="p" />
              </div>
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting" : "Submit"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default App;
