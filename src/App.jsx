import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import validator from "validator";

function App() {
  const [errormsg, seterrormsg] = useState("");

  const validate = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      seterrormsg("is strong password ");
    } else {
      seterrormsg("not strong password");
    }
  };

  return (
    <>
      <div className="text-center pt-52 text-xl bg-gray-800">
        <pre className="p-40">
          <h2> checking password strenght </h2>

          <span className="">enter passowrd:</span>
          <input type="text" onChange={(e) => validate(e.target.value)} />
          <br />
          {errormsg === "" ? null : <span>{errormsg}</span>}
        </pre>
      </div>
    </>
  );
}

export default App;
