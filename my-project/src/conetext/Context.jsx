import { Children, createContext, useState } from "react";
export const Appcontext = createContext();

const AppProvider = ({ Children }) => {
  const username = "John Doe";
  const age = 30;
  const [number, setNumber] = useState(0);
  const [btnStyle, setBtnStyle] = useState("bg-green-500");
  const [btn2Style, setBtn2Style] = useState("bg-teal-400");
  const [user, setUSer] = useState("John Doe");
  const [logoutText, setLogout] = "logout";

  const handleNumberIncrease = (e) => {
    e.preventDefault();
    setNumber(number + 1);
    setBtnStyle("bg-red-800");
  };
  const handleNumberDecrease = (e) => {
    e.preventDefault();
    if (number === 0) {
      setNumber(number);
    } else if (number > 0) {
      setNumber(number - 1);
    } else {
      console.log("btn clicked");
    }
  };

  const handleLogin = () => {
    setUSer("Timi");
    setLogout("Logout");
  };
  const logout = () => {
    setUSer("");
    setLogout("Logout");
  };
  const newBtn = () => {
    setBtn2Style("Bruce wayne");
  };

  return (
    <Appcontext.Provider
      value={{
        username,
        age,
        handleNumberIncrease,
        number,
        btnStyle,
        handleNumberDecrease,
        logout,
        newBtn,
        handleLogin,
        user,
        btn2Style,
        logoutText,
      }}
    >
      {Children}
    </Appcontext.Provider>
  );
};
