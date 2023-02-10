import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";


function Logout() {
    const { user, setUser } = useContext(UserContext);
    const [loggedIn, setLoggedIn] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
      if(user?.id) {
        setLoggedIn(true)
      } else {
        setLoggedIn(false)
      }
    }, [user])

    const logout = () =>
      fetch("/logout")
        .then(() => {
          setUser(null)
          document.cookie = ''
        })
        .then(() => {
          setLoggedIn(false)
          navigate('/')
        });
  
  
    return (
      <div>
        { loggedIn && <button onClick={logout}>Logout</button>}
      </div>
    );
  }
  
  export default Logout;