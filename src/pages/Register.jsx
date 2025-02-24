import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { useContext, useState } from "react";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";

const Register = () => {
  const { createUser, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, photoUrl, email, password);

    console.log(typeof password);

    // password validation check
    if (password.length < 6) {
      alert("Password should be at least 6 characters");
      return;
    } else if (!/[a-z]/.test(password)) {
      alert("Password should be at least one lowercase characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      alert("Password should be at least one uppercase characters");
      return;
    }

    createUser(email, password)
      .then((userCredential) => {
        const currentuser = userCredential.user;
        setUser(currentuser);
        console.log(currentuser);
        navigate("/"); // Redirect to home page
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Enter your name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                name="photoUrl"
                type="text"
                placeholder="photo-url"
                className="input input-bordered"
                required
              />
            </div>
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
              <div className="relative">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  className="input input-bordered w-full"
                  required
                />
                <div className="absolute top-1/2 -translate-y-1/2 right-2">
                  {showPassword ? (
                    <span>
                      <FaRegEyeSlash
                        onClick={() => setShowPassword(!showPassword)}
                      />
                    </span>
                  ) : (
                    <span>
                      <FaEye onClick={() => setShowPassword(!showPassword)} />
                    </span>
                  )}
                </div>
              </div>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              {/*    <Link to={"/"}>
                <button className="btn btn-primary w-full">Register</button>
              </Link> */}

              <button className="btn btn-primary w-full">Register</button>
            </div>

            <div>
              <p>
                Allready Have An Account?
                <Link className="text-red-500 underline px-2" to={"/Login"}>
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
