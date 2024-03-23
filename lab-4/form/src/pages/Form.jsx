import { useFormik } from "formik";
import * as Yup from "yup";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import {
  setEmail,
  setImageUrl,
  setName,
  setPassword,
} from "../store/slices/form";

export default function SignUpForm() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      image: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .matches(/^[a-zA-Z]+$/, "Contains only lower & upper characters")
        .required("Required"),
      email: Yup.string()
        .email("Not a valid email format")
        .required("Required"),
      password: Yup.string()
        .matches(
          /^[\w-]{8,12}$/,
          "min 8, max 12, only upper&lower&digits&_&- chars"
        )
        .required("Required"),
      confirmPassword: Yup.string()
        .label("confirm password")
        .required()
        .oneOf([Yup.ref("password"), null], "Passwords must match"),
      image: Yup.mixed().required("Required"),
    }),
    onSubmit: (values) => {
      dispatch(setName(values.name));
      dispatch(setEmail(values.email));
      dispatch(setPassword(values.password));
      dispatch(setImageUrl(values.image));
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Form has been submitted",
        showConfirmButton: false,
        timer: 1500,
      });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="container">
      <div className="form-input">
        <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
          <Form.Control
            type="text"
            placeholder="name"
            {...formik.getFieldProps("name")}
          />
        </FloatingLabel>
        {formik.touched.name && formik.errors.name ? (
          <Alert varient={"danger"}>{formik.errors.name}</Alert>
        ) : null}
      </div>
      <div className="form-input">
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control
            type="email"
            placeholder="name@example.com"
            {...formik.getFieldProps("email")}
          />
        </FloatingLabel>
        {formik.touched.email && formik.errors.email ? (
          <Alert varient={"danger"}>{formik.errors.email}</Alert>
        ) : null}
      </div>
      <div className="form-input">
        <FloatingLabel
          controlId="floatingInput"
          label="Password"
          className="mb-3"
        >
          <Form.Control
            type="password"
            placeholder=""
            {...formik.getFieldProps("password")}
          />
        </FloatingLabel>
        {formik.touched.password && formik.errors.password ? (
          <Alert varient={"danger"}>{formik.errors.password}</Alert>
        ) : null}
      </div>
      <div className="form-input">
        <FloatingLabel
          controlId="floatingInput"
          label="Confirm Password"
          className="mb-3"
        >
          <Form.Control
            type="password"
            placeholder=""
            {...formik.getFieldProps("confirmPassword")}
          />
        </FloatingLabel>
        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
          <Alert varient={"danger"}>{formik.errors.confirmPassword}</Alert>
        ) : null}
      </div>
      <div className="form-input">
        <label htmlFor="uploadImage">Upload Image</label>
        <input
          id="uploadImage"
          name="image"
          type="file"
          {...formik.getFieldProps("image")}
        ></input>
        {formik.touched.image && formik.errors.image ? (
          <Alert varient={"danger"}>{formik.errors.image}</Alert>
        ) : null}
      </div>
      <Button variant="primary" type="submit">
        Submit
      </Button>{" "}
    </form>
  );
}
