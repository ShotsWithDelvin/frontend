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
          window.localStorage.removeItem('user')
          document.cookie = ''
        })
        .then(() => {
          setLoggedIn(false)
          navigate('/')
        });
  
  
    return (
      <div className="font-primary">
        { loggedIn && <button onClick={logout}>Log out</button>}
      </div>
    );
  }
  
  export default Logout;