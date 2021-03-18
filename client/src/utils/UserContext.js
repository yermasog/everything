import React from "react";

const UserContext = React.createContext({
  id: "",
  firstName: "",
  email: "",
  googleId: "",
  events: [],
});

export default UserContext;
