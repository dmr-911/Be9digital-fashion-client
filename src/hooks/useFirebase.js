import initializationAuthentication from "../Firebase/firebase.init";
import { signInWithEmailAndPassword, getIdToken, GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword,  updateProfile  } from "firebase/auth";
import { useEffect, useState } from "react";

initializationAuthentication();
const useFirebase=()=>{
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [authError, setAuthError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');

    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, navigate) => {
      setIsLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setAuthError('');
          const newUser = { email, displayName: name };
          setUser(newUser);

          // save user to the database
          saveUser(email, name, 'POST');

          // send name to firebase after creation
          updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
          }).catch((error) => {
          });
          navigate('/');

        })
        .catch((error) => {
          setAuthError(error.message);
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
          saveUser(user.email, user.displayName, 'PUT');
          setAuthError('');
          const destination = location?.state?.from || '/';
          navigate(destination);
        }).catch((error) => {
          setAuthError(error.message);
        }).finally(() => setIsLoading(false));
    }

    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
          getIdToken(user)
          .then(idToken =>{
            setToken(idToken);
          })
        } 
        else {
          setUser({})
        }
        setIsLoading(false);
      });
    }, [auth, user]);

    useEffect(() => {
      fetch(`http://localhost:5000/users/${user.email}`)
        .then(res => res.json())
        .then(data => {
          setAdmin(data.admin)
        });
    }, [user.email])

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

    const saveUser = (email, displayName, method) => {
      const user = { email, displayName };
      fetch('http://localhost:5000/users', {
        method: method,
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(user)
      })
        .then()
    }

    return {user, token, googleSignIn, logOut, isLoading, setIsLoading, registerUser, emailSignIn, authError, admin};
};

export default useFirebase;