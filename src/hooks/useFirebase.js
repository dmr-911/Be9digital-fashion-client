import initializationAuthentication from "../Firebase/firebase.init";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

initializationAuthentication();
const useFirebase=()=>{
    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }

    return {googleSignIn};
};

export default useFirebase;