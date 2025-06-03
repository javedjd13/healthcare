import SignUpButton from "../../button/SignUpButton";
import Option from "../../option/Option";
import Input from "../ui/Input";
const SignUpAdminForm = () => {
  return (
    <form className="space-y-4">
      <div className="flex gap-2">
        <Input placeholder="First Name*" />
        <Input placeholder="Last Name*" />
      </div>
      <Input type="email" placeholder="E-mail*" />
      <Input type="password" placeholder="Password*" />
      <Input placeholder="Admin Code*" />
      <div className="flex gap-2">
        <Option />
        <Input placeholder="Phone no.*" />
      </div>
      <SignUpButton />
    </form>
  );
};

export default SignUpAdminForm;
