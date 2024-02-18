import { createContext } from "react";

const userContext = createContext({
  userName: "Default Name",
});

export default userContext;
