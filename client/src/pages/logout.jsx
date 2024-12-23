import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("token"); 
    sessionStorage.removeItem("token");
    navigate("/login");
  }, [navigate]);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Logging out...</h1>
    </div>
  );
};

export default Logout;
