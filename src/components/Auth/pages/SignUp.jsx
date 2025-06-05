import { useState } from "react";
import SignUpPatientForm from "../SignUpForm/SignUpPatientForm";
import SignUpAdminForm from "../SignUpForm/SignUpAdminForm";
import SignUpDoctorForm from "../SignUpForm/SignUpDoctorForm";
import Logo from "../../../assets/images/logo (2).png";
import { Link, useNavigate } from "react-router-dom";

const SignUp = ({ toggleMode }) => {
  const [role, setRole] = useState("Doctor");

  const renderForm = () => {
    switch (role) {
      case "Doctor":
        return <SignUpDoctorForm />;
      case "Patient":
        return <SignUpPatientForm />;
      case "Admin":
        return <SignUpAdminForm />;
      default:
        return null;
    }
  };

  const navigate = useNavigate();

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md m-auto my-5">
      <img src={Logo} alt="Genix" className="h-[100px] w-[130px]" />
      <h2 className="text-2xl font-bold mb-2">Getting Started</h2>
      <p className="text-sm mb-4">
        Already have an account?{" "}
        <Link className="no-underline" to={"/login"}>
          <button
            onClick={toggleMode}
            className="text-blue-600 underline cursor-pointer"
          >
            Sign in
          </button>
        </Link>
      </p>
      <p className="mb-4">Who are you signing up as?</p>
      <div className="flex gap-2 mb-4 rounded-md bg-gray-200">
        {["Doctor", "Patient", "Admin"].map((r) => (
          <button
            key={r}
            onClick={() => setRole(r)}
            className={`flex-1 py-2 rounded-md cursor-pointer ${
              role === r ? "bg-[#009DDE] text-white" : "bg-gray-200"
            }`}
          >
            {r}
          </button>
        ))}
      </div>
      {renderForm()}
    </div>
  );
};

export default SignUp;
