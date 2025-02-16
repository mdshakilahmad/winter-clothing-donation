import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className="h-screen flex justify-center items-center bg-blue-500">
        <div className="text-center space-y-5">
          <h2 className="text-2xl text-white">This Page Not Found</h2>
          <button className="btn btn-primary">
            <Link to={"/"}>Back to Home</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
