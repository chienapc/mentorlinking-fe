import React, { createContext, useState, useEffect, useContext } from 'react';

export const AuthContext = createContext({
    isLoggedIn: false,
    user: null,
    roles: [],
    login: () => { },
    logout: () => { },
});

export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState(() => {
        const savedAuth = localStorage.getItem('authState');
        return savedAuth ? JSON.parse(savedAuth) : { isLoggedIn: false, user: null, roles: [] };
    });

    useEffect(() => {
        localStorage.setItem('authState', JSON.stringify(authState));
    }, [authState]);

    const login = (userData, roles = []) => {
        setAuthState({
            isLoggedIn: true,
            user: userData,
            roles: roles,
        });
    };

    const logout = () => {
        setAuthState({
            isLoggedIn: false,
            user: null,
            roles: [],
        });
    };

    return (
        <AuthContext.Provider value={{ ...authState, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

export const isModerator = (roles) => {
    return roles.includes('moderator') || roles.includes('admin');
};