import { useEffect, useState } from "react";
import firebaseInitialization from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword,signOut,onAuthStateChanged,signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup,updateProfile     } from "firebase/auth";

firebaseInitialization();
const useFirebase = () => {
    const [user,setUser] = useState({});
    const [isLoading,setIsLoading] = useState(true);
    const [authError,setAuthError] = useState('');
    const [admin,setAdmin] = useState(false);
    const auth = getAuth();

    // User Registration
    const registerUser = (email,password,history,name) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // const user = userCredential.user;
            setAuthError('');
            const newUser = {email, displayName: name};
            setUser(newUser);
            saveUser(email,name,'POST')
            updateProfile(auth.currentUser, {
                displayName: name 
              }).then(() => {
                
              }).catch((error) => {
                
              });
            history.replace('/')
           
        })
        .catch((error) => {
            setAuthError(error.code);
        })
        .finally(() => setIsLoading(false));
    }


    // Observer 
    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
              setUser({});
            }
            setIsLoading(false);
          });
          return () =>  unsubscribe
    },[])


    // Login
    const loginUser = (email,password,location,history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const destination = location?.state?.from || '/home';
            history.replace(destination);
            setAuthError('');
            // ...
        })
        .catch((error) => {
            setAuthError(error.code);
        })
        .finally(() => setIsLoading(false));
    }

    // Login with Google
        const googleLogin = (location,history) => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user = result.user;
            saveUser(user.email,user.displayName,'PUT');
            const destination = location?.state?.from || '/home';
            history.replace(destination);
            setAuthError('');
        }).catch((error) => {
            setAuthError(error.code);
        }).finally(() => setIsLoading(false));;
            }
    
       useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
       },[user.email])        

    // Sign out
    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(() => setIsLoading(false));;
    }

    // Save user 
    const saveUser = (email,displayName,method) => {
        const user = {email,displayName}
        fetch('http://localhost:5000/users',{
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
            
        })
        .then()
    }


    return {
        user,
        admin,
        isLoading,
        registerUser,
        logOut,
        loginUser,
        authError,
        googleLogin
    }
}
export default useFirebase;