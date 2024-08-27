import { createContext, useContext, useEffect, useState } from "react";
import { useUsersDatabase } from "../../database/useUsersDatabase";

const AuthContext = createContext({});

export const Role = {
    SUPER: "SUPER",
    ADM: "ADM",
    USER: "USER",
};

export function AuthProvider({children}) {
    const [user, setUser] = useState({
        autenticated: null,
        user: null,
        role: null,
    });

    const { authUser } = useUsersDatabase();

    const signIn = async ({email, password}) => {
        const response = await authUser({ email, password });

        if (!response) {
            setUser({
                autenticated: false,
                user: null,
                role: null,
            });
        }

        if (email === "super@email.com" && password === "Super123!") {
            setUser({
                autenticated: true,
                user: { id: 1, name: "Super Usuario", email },
                role: Role.SUPER,
            });
        }   else if (email === "adm@email.com" && password === "adm123!") {
            setUser({
                autenticated: true,
                user: { id: 2, name: "Adiministrador", email },
                role: Role.ADM,
            });
        }   else if (email === "user@email.com" && password === "user123!") {
            setUser({
                autenticated: true,
                user: response, 
                role: response.role, 
            });
        }
    };

    const signOut = async () => {
        setUser({});
    };

    useEffect(()=> {
        console.log('AuthProvider: ', user);
    }, [user]);

    return (
        <AuthContext.Provider value={{user, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}