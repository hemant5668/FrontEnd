import React, {useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import isAuthentication from "./store/auth-context";

function App() {
  const ctx = useContext(isAuthentication)
  return (
    <>
      <MainHeader />
      <main>
        {!ctx.isLoggedin ? (
          <Login/>
        ) : (
          ctx.isLoggedin && <Home/>
        )}
      </main>
    </>
  );
}

export default App;
