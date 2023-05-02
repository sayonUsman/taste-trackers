import React, { useContext, useState } from "react";
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
    const profileLink = form.profile.value;
    console.log(userName, profileLink);

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
        setMessage("Successfully signed in");
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
        setMessage("Successfully signed in");
        navigate("/");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <div className="container mx-auto">
      <div className="flex">
        <div className="flex mx-auto mt-32 lg:mt-24 mb-5">
          <div>
            <div className="card rounded-lg w-96 bg-base-100 shadow-md shadow-zinc-800 p-5">
              <h1 className="text-center text-2xl font-bold">Please Sign Up</h1>

              <form onSubmit={handleSubmit}>
                <div className="form-control mt-10">
                  <label className="input-group">
                    <span>Email</span>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="info@site.com"
                      className="input input-bordered"
                      required
                    />
                  </label>
                </div>

                <div className="form-control mt-5">
                  <label className="input-group">
                    <span>Password</span>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="input input-bordered"
                      required
                    />
                  </label>
                </div>

                <div className="form-control mt-5">
                  <label className="input-group w-2/5">
                    <span className="text-center">Confirm Password</span>
                    <input
                      type="password"
                      name="confirmPassword"
                      id="confirmPassword"
                      className="input input-bordered"
                      required
                    />
                  </label>
                </div>

                <div className="form-control mt-5">
                  <label className="input-group">
                    <span>User Name</span>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="input input-bordered"
                      required
                    />
                  </label>
                </div>

                <div className="form-control mt-5">
                  <label className="input-group">
                    <span>Profile Link</span>
                    <input
                      type="link"
                      name="profile"
                      id="profile"
                      className="input input-bordered"
                      required
                    />
                  </label>
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
                  <Link to="/login" className="text-primary">
                    Login
                  </Link>
                </small>
              </p>

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
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
