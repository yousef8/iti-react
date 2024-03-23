import { Route, Routes } from "react-router-dom";
import SignUpForm from "../pages/Form";
import PreviousForm from "../pages/PreviousForm";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<SignUpForm />} />
      <Route path="/prev-form" element={<PreviousForm />} />
    </Routes>
  );
}
