import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext({});

export const UserProvider = ( props ) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    document.cookie
      ? fetch(`http://localhost:3001/users/${document.cookie.users_id}`)
        .then((res) => {
          if (res.status === 200) return res.json();
          return null;
        })
        .then((json) => {
          console.log(json)
          setUser(json)
        })
      : setUser(null);
  }, [setUser]);

  const context = {
    user,
    setUser
  }

  return (
    <UserContext.Provider value={context}>
      {props.children}
    </UserContext.Provider>
  );
};