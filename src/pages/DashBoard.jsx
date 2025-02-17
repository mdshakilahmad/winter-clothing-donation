import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const DashBoard = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <div>
      <div className="text-center">
        <h2 className="text-3xl">Dashboard</h2>
        <div>
          <img className="mx-auto" src={user && user.photoURL}></img>
        </div>
        <h3 className="text-lg">{user && user.name}</h3>
        <h3 className="text-lg">{user && user.email}</h3>
      </div>
    </div>
  );
};

export default DashBoard;
