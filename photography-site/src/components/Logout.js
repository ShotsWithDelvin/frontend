import React, { useContext } from "react";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";


function Logout() {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const logout = () =>{
      localStorage.removeItem('showcase-token')
      setUser(undefined)
      navigate('/')
    }
  
    return (
      <div className="font-primary">
        { user && <button onClick={logout}>Log out</button>}
      </div>
    );
  }
  
  export default Logout;