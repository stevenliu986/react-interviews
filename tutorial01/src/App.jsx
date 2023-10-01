import { useState, useEffect } from "react";
import breakify from "./breakify";
import { BreakLogo } from "./BreakLogo";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [first, setFirst] = useState([]);
  const [last, setLast] = useState([]);

  useEffect(() => {
    setFirst(breakify(firstName));
  }, [firstName]);

  useEffect(() => {
    setLast(breakify(lastName));
  }, [lastName]);

  return (
    <>
      <BreakLogo result={first} />
      <BreakLogo result={last} />
      <label>First Name</label>
      <input
        type="text "
        onChange={(e) => setFirstName(e.target.value)}
        value={firstName}
      />
      <label>Last Name</label>
      <input
        type="text "
        onChange={(e) => setLastName(e.target.value)}
        value={lastName}
      />
    </>
  );
}

export default App;
