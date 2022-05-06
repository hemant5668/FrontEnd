import EnterInput from "./components/EnterInput";
import "./App.css";
import Userlist from "./components/Userlist";
import { useState } from "react";

function App() {
  const [userlist, setuserlist] = useState([]);

  const adduserhandler = (finalfrom) => {
    setuserlist((prevlist) => {
      return [...prevlist, finalfrom];
    });
  };

  return (
    <>
      <div>
        <EnterInput onadduser={adduserhandler} />
      </div>
      <div>
        <Userlist users={userlist} />
      </div>
    </>
  );
}

export default App;
