import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const ContextProvider = ({ children }) => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);

      if (currentUser) {
        const loggedInUser = {
          name: currentUser.displayName,
          email: currentUser.email,
        };

        fetch("https://taste-trackers.vercel.app/access-token", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(loggedInUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("taste-trackers-access-token", data.token);
          });
      } else {
        localStorage.removeItem("taste-trackers-access-token");
      }
    });

    return () => {
      return unsubscribe();
    };
  }, []);

  const loggedInUser = () => {
    const user = auth.currentUser;

    if (user !== null) {
      const displayName = user.displayName;
      const email = user.email;
      const photoURL = user.photoURL;

      return [displayName, email, photoURL];
    }

    return [];
  };

  const createNewUser = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginWithEmailAndPassword = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const loginWithGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const loginWithGithub = () => {
    setIsLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  const authContext = {
    user,
    isLoading,
    loggedInUser,
    createNewUser,
    loginWithEmailAndPassword,
    logOut,
    loginWithGoogle,
    loginWithGithub,
  };

  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
};

export default ContextProvider;
