import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/userContext";

const Logout = () => {
  const navigate = useNavigate();
  const { logoutUser } = useUser();

  useEffect(() => {
    localStorage.removeItem("token"); 
    sessionStorage.removeItem("token");
    logoutUser()
    navigate("/login");
  }, [navigate]);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Logging out...</h1>
    </div>
  );
};

export default Logout;
