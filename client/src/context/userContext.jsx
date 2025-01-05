import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/user/logger", {
          withCredentials: true,
        });
        loginUser(response.data); 
      } catch (error) {
        console.error("User fetch failed:", error.response?.data || error.message);
        setUser(null);
      } finally {
        setLoading(false); 
      }
    };

    fetchUser();
  }, []);

  const loginUser = (userData) => {
    setUser(userData); 
  };

  const logoutUser = async () => {
    try {
      await axios.post("/api/user/logout", {}, { withCredentials: true });
      setUser(null);
    } catch (error) {
      console.error("Logout failed:", error.response?.data || error.message);
    }
  };

  if (loading) {
    return <div>Loading...</div>;  
  }

  return (
    <UserContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
