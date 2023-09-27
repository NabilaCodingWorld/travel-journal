import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth';
import { app } from '../firebase/firebase.config';
import axios from 'axios';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProviders = ({children}) => {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    // registration

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // logg in
    const loggIn = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // logout
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // profile and user

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)

            // get and set token
            if(currentUser){
                axios.post('http://localhost:5000/jwt', {email: currentUser.email})
                .then(data =>{
                    console.log(data.data.token)
                    localStorage.setItem('access-token', data.data.token)
                    setLoading(false);
                })
            }

            else{
                localStorage.removeItem('access-token')
            }

            
        })
        return () =>{
            unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        loggIn,
        logOut,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;