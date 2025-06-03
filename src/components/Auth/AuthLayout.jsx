import Logo from "../../assets/logo (2).png";
const AuthLayout = ({
  children,
  heading,
  subheading,
  supheading,
  linkText,
  linkTo,
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#009DDE] p-4 ">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6">
        <img src={Logo} alt="Logo" className="h-[100px] w-[130px]" />
        <div className="">
          <h2 className="text-2xl font-bold text-start mb-1">{heading}</h2>
          <p className="text-start text-sm mb-1">
            {subheading} &nbsp;
            <a href={linkTo} className="text-[#009DDE]">
              {linkText}
            </a>
          </p>
          <p className="mb-3">{supheading}</p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
