import { createContext, ReactNode, useState } from "react";

export const MainContext = createContext({});

export const MainProvider = ({ children }) => {
  const [isMute, setIsMute] = useState(false)

  return (
    <MainContext.Provider
      value={{
        sound: {mute: [isMute, setIsMute]}
      }}
    >
      {children}
    </MainContext.Provider>
  );
};