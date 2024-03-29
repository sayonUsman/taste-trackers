import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/ContextProvider";

const SignUpPage = () => {
  const { createNewUser, loginWithGoogle, loginWithGithub } =
    useContext(AuthContext);

  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const userName = form.name.value;
    const profileLink = form.url.value;

    setMessage("");
    setErrorMessage("");

    if (password !== confirmPassword) {
      form.reset();
      setErrorMessage("Your password did not match with the confirm password");
      return;
    }

    if (password.length < 6) {
      form.reset();
      setErrorMessage("Password must be at least 6 characters");
      return;
    }

    createNewUser(email, password)
      .then(() => {
        form.reset();
        setMessage("Successfully signed up");
        navigate("/");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  const handleGoogleLogin = () => {
    setMessage("");
    setErrorMessage("");

    loginWithGoogle()
      .then(() => {
        setMessage("Successfully signed up");
        navigate("/");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  const handleGithubLogin = () => {
    setMessage("");
    setErrorMessage("");

    loginWithGithub()
      .then(() => {
        setMessage("Successfully signed up");
        navigate("/");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <div className="hero mt-24 lg:mt-0 min-h-screen">
      <div>
        <div className="card glass rounded-none md:rounded-lg w-96 p-5">
          <h1 className="text-center text-2xl font-bold">Please Sign Up</h1>

          <form onSubmit={handleSubmit}>
            <div className="form-control mt-5">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>

              <input
                type="text"
                name="name"
                id="name"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Profile Url</span>
              </label>

              <input
                type="url"
                name="url"
                id="url"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>

              <input
                type="email"
                name="email"
                id="email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>

              <input
                type="password"
                name="password"
                id="password"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>

              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                className="input input-bordered"
                required
              />
            </div>

            <div className="flex">
              <div className="flex mx-auto">
                <input
                  type="submit"
                  value="Sign Up"
                  className="btn rounded mt-7"
                ></input>
              </div>
            </div>
          </form>

          <p className="text-center mt-2">
            <small>
              Already have an account? Please{" "}
              <Link to="/login" className="link-hover">
                Login
              </Link>
            </small>
          </p>
        </div>

        <div>
          <h1 className="text-center text-3xl font-semibold mt-10">Or</h1>
          <h1 className="text-center text-xl font-semibold mt-2 mb-2">
            Continue with
          </h1>

          <div className="flex justify-center">
            <button
              onClick={handleGoogleLogin}
              className="btn btn-ghost text-lg font-semibold"
            >
              Google
            </button>

            <button
              onClick={handleGithubLogin}
              className="btn btn-ghost text-lg font-semibold"
            >
              Github
            </button>
          </div>
        </div>
      </div>

      {message && (
        <div className="toast toast-end">
          <div className="alert alert-success">
            <div>
              <span>{message}</span>
            </div>
          </div>
        </div>
      )}

      {errorMessage && (
        <div className="toast toast-end">
          <div className="alert alert-error">
            <div>
              <span>{errorMessage}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUpPage;
