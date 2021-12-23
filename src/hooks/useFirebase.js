import initializationAuthentication from "../Firebase/firebase.init";
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

initializationAuthentication();
const useFirebase=()=>{
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    // const googleSignIn = () => {
    //     return signInWithPopup(auth, googleProvider);
    // }

    const googleSignIn = (location, navigate) => {
      setIsLoading(true);
      signInWithPopup(auth, googleProvider)
        .then((result) => {
          const user = result.user;
          // saveUser(user.email, user.displayName, 'PUT');
          // setAuthError('');
          const destination = location?.state?.from || '/';
          navigate(destination);
        }).catch((error) => {
          // setAuthError(error.message);
        }).finally(() => setIsLoading(false));
    }

    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        } else {
        }
        setIsLoading(false);
      });
    }, [auth, user]);

    const logOut = () => {
      setIsLoading(true);
      signOut(auth)
        .then(() => {
          setUser({});
        })
        .catch((error) => {
          setError(error.message);
        })
        .finally(() => setIsLoading(false));
    };

    return {user, googleSignIn, logOut, isLoading, setIsLoading};
};

export default useFirebase;