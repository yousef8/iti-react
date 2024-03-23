import { useSelector } from "react-redux";

export default function PreviousForm() {
  const form = useSelector((state) => state.form);
  return (
    <>
      <h1>Name : {form.name}</h1>
      <h1>Email : {form.email}</h1>
      <h1>Password : {form.password}</h1>
      <h1>Image URL : {form.imageUrl}</h1>
    </>
  );
}
