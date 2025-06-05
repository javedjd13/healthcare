import { Suspense } from "react";
import Spinner from "../Loader/Spinner";

// ===========================|| LOADABLE - LAZY LOADING ||=========================== //

const Loadable = (Component) =>
  function (props) {
    return (
      <Suspense fallback={<Spinner />}>
        <Component {...props} />
      </Suspense>
    );
  };

export default Loadable;
