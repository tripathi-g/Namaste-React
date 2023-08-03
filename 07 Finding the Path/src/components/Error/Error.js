import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <>
      <h1>Opps .....</h1>
      <h3>Error Occured</h3>
      <h4>
        {err.status} : {err.data}
      </h4>
    </>
  );
};

export default Error;
