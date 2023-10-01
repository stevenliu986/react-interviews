import { useContext } from "react";
import { MyContext } from "./App";

export const Button = () => {
  const { user } = useContext(MyContext);
  return <button>{user.userName}</button>;
};
