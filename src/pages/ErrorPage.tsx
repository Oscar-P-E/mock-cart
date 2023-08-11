import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <h1>Oh no! This page does not exist!</h1>
      <Link to="/">Click here to go back</Link>
    </>
  );
};

export default ErrorPage;
