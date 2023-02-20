import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext({});

export const UserProvider = ( props ) => {
  const [user, setUser] = useState(undefined);
  const [showOverlay, setShowOverlay] = useState(false)

 
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('showcase-token'))
      if(token) {
          fetch(`http://localhost:3001/users/${token.user.id}`).then((res) => res.json()).then((json) => {
            console.log('run')
            setUser(json)
          })
      } else {
          setUser(undefined)
      }
  }, [])


  const context = {
    user,
    setUser,
    showOverlay,
    setShowOverlay,
  }

  return (
    <UserContext.Provider value={context}>
      {props.children}
    </UserContext.Provider>
  );
};