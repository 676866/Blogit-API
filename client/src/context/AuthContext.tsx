import { createContext, useContext, useState, type ReactNode } from "react";
import { jwtDecode } from "jwt-decode";

// User type definition
interface User {
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
}

// Auth context type definition
interface AuthContextType {
  user: User | null;
  setUser: (user: User | null) => void; // ✅ Add this
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
}

// Create context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Decode token to extract user info
function decodeUser(token: string): User {
  const decoded: any = jwtDecode(token);
  return {
    id: decoded.id,
    username: decoded.username,
    email: decoded.email,
    firstName: decoded.firstName,
    lastName: decoded.lastName,
  };
}

// AuthProvider component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(() => localStorage.getItem("token"));
  const [user, setUser] = useState<User | null>(() => {
    const stored = localStorage.getItem("token");
    return stored ? decodeUser(stored) : null;
  });

  // Save token + decode user
  const login = (newToken: string) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
    setUser(decodeUser(newToken));
  };

  // Clear auth
  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
