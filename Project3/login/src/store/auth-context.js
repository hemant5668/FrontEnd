import React, { useState,useEffect } from "react";

const isAuthentication = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onlogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedin, setisLoggedin] = useState(false);

  useEffect(() => {
    const storeduserinfo = localStorage.getItem("isLoggedIn");
    if (storeduserinfo === "1") {
      setisLoggedin(true);
    }
  }, []);

  const loginhandler = () => {
    localStorage.setItem("isLoggedIn", "1");
    setisLoggedin(true);
  };

  const logouthandler = () => {
    localStorage.removeItem("isLoggedIn");
    setisLoggedin(false);
  };
  return (
    <isAuthentication.Provider
      value={{
        isLoggedIn: isLoggedin,
        logout: logouthandler,
        onlogin: loginhandler,
      }}
    >
      {props.children}
    </isAuthentication.Provider>
  );
};

export default isAuthentication;
