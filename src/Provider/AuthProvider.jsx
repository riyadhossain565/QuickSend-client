import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebase.init";
import useAxiosPublic from "../Hooks/useAxiosPublic/useAxiosPublic";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const axiosPublic = useAxiosPublic();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // onAuthStateChange
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log("current user--->", currentUser);
      setUser(currentUser);

      if (currentUser) {
        //get token and store client
        const userInfo = { email: currentUser.email };
        axiosPublic.post("/jwt", userInfo)
        .then(res => {
          if(res.data.token){
            localStorage.setItem('access-token', res.data.token);
          }
        })
      } else {
        // remove token
        localStorage.removeItem('access-token');
      }

      setLoading(false);
    
    });

    return () => {
      return unsubscribe;
    };
  }, [axiosPublic]);

  const authInfo = {
    user,
    loading,
    setUser,
    setLoading,
    createUser,
    signIn,
    signInWithGoogle,
    updateUserProfile,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
