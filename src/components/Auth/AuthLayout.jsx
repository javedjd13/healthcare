import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo (2).png";
import SIGN_UP from "../../routes/appRoutes";
const AuthLayout = ({
  children,
  heading,
  subheading,
  supheading,
  linkText,
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#009DDE] p-4 ">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6">
        <img src={Logo} alt="Logo" className="h-[100px] w-[130px]" />
        <div className="">
          <h2 className="text-2xl font-bold text-start mb-1">{heading}</h2>
          <p className="text-start text-sm mb-1">
            {subheading} &nbsp;
            <Link to={"/signup"} className="text-[#009DDE]">
              {linkText}
            </Link>
          </p>
          <p className="mb-3">{supheading}</p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
