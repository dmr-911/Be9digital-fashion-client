import initializationAuthentication from "../Firebase/firebase.init";
import { signInWithEmailAndPassword, GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword,  updateProfile  } from "firebase/auth";
import { useEffect, useState } from "react";

initializationAuthentication();
const useFirebase=()=>{
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);

    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, navigate) => {
      setIsLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // setAuthError('');
          const newUser = { email, displayName: name };
          setUser(newUser);
          // save user to the database
          // saveUser(email, name, 'POST');
          // send name to firebase after creation
          updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
          }).catch((error) => {
          });
          navigate('/');

        })
        .catch((error) => {
          // setAuthError(error.message);
          console.log(error);
        })
        .finally(() => setIsLoading(false));
    }

    const emailSignIn = (email, password) =>{
      return signInWithEmailAndPassword(auth, email , password);
    }

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

    return {user, googleSignIn, logOut, isLoading, setIsLoading, registerUser, emailSignIn};
};

export default useFirebase;