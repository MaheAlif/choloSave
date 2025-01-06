import { createContext, useState } from "react";

// Create the context
export const userContext = createContext({});

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log("User in Context API:", user);

  return (
    <userContext.Provider value={{ user, setUser, loading }}>
      {children}
    </userContext.Provider>
  );
};

export default ContextProvider;
