import SignUp from "./components/Auth/pages/SignUp";
import Login from "./components/Auth/pages/Login";
import { useState } from "react";
const App = () => {
  const [mode, setMode] = useState("signup"); // 'signup' or 'login'
  return (
    <div className="">
      <div className="min-h-screen  flex items-center justify-center bg-[#009DDE]">
        {mode === "signup" ? (
          <SignUp toggleMode={() => setMode("login")} />
        ) : (
          <Login toggleMode={() => setMode("signup")} />
        )}
      </div>
    </div>
  );
};

export default App;
