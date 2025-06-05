import { Outlet } from "react-router-dom";
import Footer from "../../footer/Footer";

function BlankLayout() {
  return (
    <>
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}

export default BlankLayout;
