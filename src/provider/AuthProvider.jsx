import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const auth = getAuth(app);

  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);
  // console.log(user);
  // create new user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login with email password
  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // login with google
  const googleLogin = () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  // logout user
  const loggedOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  // get user data
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      // console.log(user);
      const userEmail = user?.email || currentUser?.email;
      const loggedUer = { email: userEmail };
      if (currentUser) {
        axios
          .post("https://classic-hotel-server.vercel.app/jwt", loggedUer, {
            withCredentials: true,
          })
          .then((result) => {
            console.log(result.data);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        axios
          .post("https://classic-hotel-server.vercel.app/logout", loggedUer, {
            withCredentials: true,
          })
          .then((result) => {
            console.log(result.data);
          });
      }
    });
    return () => {
      unSubscribe;
    };
  }, []);

  const authInfo = {
    user,
    googleLogin,
    createUser,
    loading,
    loggedOut,
    logIn,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
