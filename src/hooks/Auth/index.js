import { createContext, useContext, useEffect, useState } from "react";
import { useUsersDatabase } from "../../database/useUsersDatabase";

const AuthContext = createContext({});

export const Role = {
  SUPER: "SUPER",
  ADM: "ADM",
  USER: "USER",
};

export function AuthProvider({ children }) {

  const [user, setUser] = useState({
    autenticated: null,
    user: null,
    role: null,
  });

  const { authUser } = useUsersDatabase();


  const signIn = async ({ email, password }) => {
    const response = await authUser({ email, password });
    console.log(response);

    if (!response) {
      setUser({
        autenticated: false,
        user: null,
        role: null,
      });
      throw new Error("Usuário ou senha inválidos");
    }

    if (email === "super@email.com" && password === "A123456a!") {
      setUser({
        autenticated: true,
        user: { id: 1, name: "Super Usuario", email },
        role: Role.SUPER,
      });
    } else if (email === "adm@email.com" && password === "A123456a!") {
      setUser({
        autenticated: true,
        user: { id: 2, name: "Administrador", email },
        role: Role.ADM,
      });
    } else if (email === "user@email.com" && password === "A123456a!") {
      setUser({
        autenticated: true,
        user: null,
        role: null,
      });
    }
  };

  const signOut = async () => {
    setUser({});
  };

  useEffect(() => {
    console.log("AuthContext: ", user);
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
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
