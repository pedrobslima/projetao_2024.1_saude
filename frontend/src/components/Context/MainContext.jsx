import { createContext, ReactNode, useState } from "react";

const MainContext = createContext({});

export const MainProvider = ({ children }) => {
  const [isMute, setIsMute] = useState(false);

  return (
    <MainContext.Provider
      value={{
        sound: { mute: [isMute, setIsMute] },
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainProvider;
