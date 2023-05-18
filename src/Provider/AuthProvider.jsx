import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app)

import React from 'react';

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true)

    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    const signInWithGoogle = () =>{
        setLoader(true);
        return signInWithPopup(auth, googleProvider);
    }

    const signInWithGithub = () =>{
        setLoader(true);
        return signInWithPopup(auth, gitHubProvider)
    }
    const createUser = (email, password ) =>{
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) =>{
        setLoader(true);
        return signInWithEmailAndPassword(auth, email,password)
    }
    const logOut = () =>{
        setLoader(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth,loggedUser =>{
            setUser(loggedUser);
            setLoader(false);
        })
        return () =>{
            unsubscribe();
        }
    },[])
    const authInfo={
        user,
        loader,
        setLoader,
        signInWithGoogle,
        signInWithGithub,
        createUser,
        signInUser,
        logOut, 
      
        

    }

    return (
        <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;