import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

export const MarketContext = createContext();
const AuthProvider = ({children}) => {
    const allContext = useFirebase();
    return (
        <MarketContext.Provider value={allContext}>
            {children}
        </MarketContext.Provider>
    );
};

export default AuthProvider;