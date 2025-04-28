import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const DashBoard = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <div>
        <h2 className="text-4xl pb-2">Welcome, {user && user.displayName}</h2>
        <div>
          <img className="mx-auto" src={user && user.photoURL}></img>
        </div>
        <h3 className="text-lg pb-2">
          <span className="font-bold">Name:</span> {user && user.name}
        </h3>
        <h3 className="text-lg">
          <span className="font-bold">Email:</span>
          {user && user.email}
        </h3>
      </div>
    </div>
  );
};

export default DashBoard;
