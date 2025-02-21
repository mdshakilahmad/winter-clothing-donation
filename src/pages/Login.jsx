import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const { setUser, loginUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then((userCredential) => {
        const currentuser = userCredential.user;
        setUser(currentuser);
        console.log(currentuser);
        navigate("/donate"); // Redirect to donate page
      })
      .catch((error) => {
        alert(error.code);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((userCredential) => {
        const currentuser = userCredential.user;
        setUser(currentuser);
        console.log(currentuser);
        navigate("/donate"); // Redirect to donate page
      })
      .catch((error) => {
        alert(error.code);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>

            <div className="mx-auto">
              <button
                type="button"
                onClick={handleGoogleSignIn}
                className="btn btn-primary my-4"
              >
                <FaGoogle />
              </button>
            </div>

            <div>
              <p>
                Dont have an account?
                <Link className="text-red-500 underline px-2" to={"/register"}>
                  Registration
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
