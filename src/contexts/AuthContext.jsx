import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ email: "t.sokac89@gmail.com" });
  const { value, setItem, getItem, removeItem } = useLocalStorage();
  const [headerState, setHeaderState] = useState({
    title: "Curator",
    favoritesIcon: false,
    calendarComponent: false,
  });
  const navigate = useNavigate();

  return (
    <AuthContext.Provider value={{ user, headerState, setHeaderState }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
