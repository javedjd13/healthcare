import { useState } from "react";
import LoginDoctorForm from "../LoginForm/LoginDoctorForm";
import AuthLayout from "../AuthLayout";
import AuthTabs from "../AuthTabs";
import LoginPatientForm from "../LoginForm/LoginPatientForm";
import LoginAdminForm from "../LoginForm/LoginAdminForm";

const Login = () => {
  const [role, setRole] = useState("Doctor");

  const renderForm = () => {
    switch (role) {
      case "Doctor":
        return <LoginDoctorForm />;
      case "Patient":
        return <LoginPatientForm />;
      case "Admin":
        return <LoginAdminForm />;
    }
  };

  return (
    <AuthLayout
      heading="Welcome back"
      subheading="Don’t have an account?"
      supheading="Log in as :"
      linkText="Sign up"
    >
      <AuthTabs role={role} setRole={setRole} />
      {renderForm()}
    </AuthLayout>
  );
};

export default Login;
