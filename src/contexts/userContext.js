// 1. createContext - UserContext - similar to global variable, wrap the components in the provider 
// 2. export UserContext
// 3. create UserContextProvider.jsx - Provider, pass children as props in UserContext.Provider Component and export
// 4. 


import React from "react";

const UserContext = React.createContext();

export default UserContext;