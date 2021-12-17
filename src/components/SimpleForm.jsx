import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
const initialValues = {
  name: "",
  email: "",
  channel: "",
  comments: "",
  address: "",
  phNumber: [""],
};

const onSubmit = (values) => {
  console.log("form Data", values);
};
const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid Email").required("Required"),
  channel: Yup.string().required("Required"),
  address: Yup.string().required(
    "Require your  address we will keep it confidential"
  ),
  phNumber:Yup.string().required("Please enter atleast one phone number")
});

const validateComments = value => {
  let error
  if(!value){
    error = "REQUIRED"
  }
  return error
}

const SimpleForm = () => {
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <label htmlFor="Name">Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" />
          <br />
          <label htmlFor="Email">Email</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email">
            {(errMsg) => <div className="error">{errMsg}</div>}
          </ErrorMessage>
          <br />
          <label htmlFor="Channel">Channel</label>
          <Field type="text" name="channel" id="channel" />
          <ErrorMessage name="channel" />
          <label htmlFor="comments">comments</label>
          <Field as="textarea" name="comments" id="comments" validate={validateComments}/>
          <ErrorMessage name='comments' />

          <label htmlFor="address">Address</label>
          <Field name="address">
            {(props) => {
              const { field, meta } = props;
              console.log("Render Props", props);
              return (
                <div>
                  <input type="text" id="address" {...field} />
                  {meta.touched && meta.error ? (
                    <div> {meta.error} </div>
                  ) : null}
                </div>
              );
            }}
          </Field>
          <br />
          <label htmlFor="phNumber">Phone Number</label>
          <FieldArray name="phNumber">
            {(fieldArrayprops) => {
              console.log("field array props", fieldArrayprops);
              const { push, remove, form } = fieldArrayprops;
              const { values } = form;
              const { phNumber } = values;
              return (
                <div>
                  {phNumber.map((phnumber, index) => (
                    <div key={index}>
                      <Field name={`phNumbers[${index}]`} />
                      {
                        index > 0 &&
                        <button type="button" onClick={()=>remove(index)}>-</button>
                      }
                      <button type="button" onClick={()=>push("")}>+</button>
                    </div>
                  ))}
                </div>
              );
            }}
          </FieldArray>
          <br />
          <br />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};

export default SimpleForm;

// managing all the form state
// handling form submission
// validation and error messages

// Formik Components
// Formik
// Field
// Form
// Error Message
