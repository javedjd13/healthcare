import SignInButton from "../../button/SignInButton";
import Input from "../ui/Input";

const LoginDoctorForm = () => {
  return (
    <form className="space-y-4 p-4 w-2xs">
      <Input type="email" placeholder="E-mail*" />
      <div className="relative">
        <Input type="password" placeholder="Password*" />
      </div>
      <SignInButton />
    </form>
  );
};

export default LoginDoctorForm;
