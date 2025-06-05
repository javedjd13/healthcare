// import React from "react";

// const SignInButton = () => {
//   return (
//     <button
//       type="submit"

//       className="w-full bg-[#009DDE] cursor-pointer text-white py-2 rounded-md font-semibold"
//     >
//       Sign in
//     </button>
//   );
// };

// export default SignInButton;
import React from "react";
import { useNavigate } from "react-router-dom";

const SignInButton = () => {
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();

    // Redirect to home page
    navigate("/home");
  };

  return (
    <button
      type="submit"
      onClick={handleSignIn}
      className="w-full bg-[#009DDE] cursor-pointer text-white py-2 rounded-md font-semibold"
    >
      Sign in
    </button>
  );
};

export default SignInButton;
