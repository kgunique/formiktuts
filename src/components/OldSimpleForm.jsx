import { useFormik } from "formik";
import * as Yup from 'yup'
const initialValues = {
  name: "",
  email: "",
  channel: "",
};

const onSubmit = (values) => {
  console.log("form Data", values);
};
const validationSchema = Yup.object({
    name:Yup.string().required("Required"),
    email:Yup.string().email("Invalid Email").required("Required"),
    channel:Yup.string().required("Requires")
})

// const validate = (values) => {
//   //    values.name values.email, values.channel
//   //    errors.name errors.email, errors.channel
//   //    errors.name= "This Field Is required"

//   let errors = {};

//   if (!values.name) {
//     errors.name = "Required";
//   }

//   if (!values.email) {
//     errors.email = "Required";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = "Invalid E-mail Format";
//   }

//   if (!values.channel) {
//     errors.channel = "Required";
//   }

//   return errors;
// };

const OldSimpleForm = () => {
  const frmik = useFormik({
    initialValues,
    onSubmit,
    // validate,
    validationSchema
  });
  console.log("VISITED FIELDS", frmik.touched);

  return (
    <>
      <form onSubmit={frmik.handleSubmit}>
        <label htmlFor="Name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={frmik.handleChange}
          onBlur={frmik.handleBlur}
          value={frmik.values.name}
        />
        {frmik.touched.name && frmik.errors.name ? <div>{frmik.errors.name}</div> : null}
        <br />
        <label htmlFor="Email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onBlur={frmik.handleBlur}
          onChange={frmik.handleChange}
          value={frmik.values.email}
        />
        {frmik.touched.email && frmik.errors.email ? <div>{frmik.errors.email}</div> : null}
        <br />
        <label htmlFor="Channel">Channel</label>
        <input
          type="text"
          name="channel"
          id="channel"
          onBlur={frmik.handleBlur}
          onChange={frmik.handleChange}
          value={frmik.values.channel}
        />
        {frmik.touched.channel && frmik.errors.channel ? <div>{frmik.errors.channel}</div> : null}
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default OldSimpleForm;

// managing all the form state
// handling form submission
// validation and error messages
