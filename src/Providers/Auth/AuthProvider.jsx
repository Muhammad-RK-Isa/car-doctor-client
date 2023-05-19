import { createContext, useEffect, useState } from 'react';
import { app } from './../../Firebase/firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';

export const UserContext = createContext( null );

const AuthProvider = ( { children } ) => {

    const [ user, setUser ] = useState( null );
    const [ loading, setLoading ] = useState( false );
    const auth = getAuth( app );

    const signIn = ( email, password ) => {
        setLoading( true );
        return signInWithEmailAndPassword( auth, email, password );
    };

    const signUp = ( email, password ) => {
        setLoading( true );
        return createUserWithEmailAndPassword( auth, email, password );
    };

    const authenticateWithGoogle = () => {
        setLoading( true );
        const provider = new GoogleAuthProvider();
        return signInWithPopup( auth, provider );
    };

    const logOut = () => {
        signOut( auth );
    };

    const props = {
        user,
        signIn,
        signUp,
        logOut,
        loading,
        authenticateWithGoogle
    };

    useEffect( () => {
        const unsubscribe = onAuthStateChanged( auth, async ( user ) => {
            if ( user ) {
                setUser( user );
                setLoading( false );
            } else {
                setUser( null );
            }
        } );

        return () => {
            unsubscribe();
        };
    }, [] );


    return (
        <UserContext.Provider value={ props } >
            { children }
        </UserContext.Provider>
    );
};

export default AuthProvider;