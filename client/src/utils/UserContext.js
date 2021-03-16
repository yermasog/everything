import React from "react";

const UserContext = React.createContext({
    id: "",
    firstName: "",
    email: ""
});

export default UserContext;
