import React, { useState } from "react";

type ThemeContextType = {
    isLight: boolean,
    setIsLight: React.Dispatch<React.SetStateAction<boolean>>
}

export const ThemeContext = React.createContext<ThemeContextType>({isLight:true, setIsLight: () => {}});

export default function Theme({children} : {children: React.ReactNode}) {
    const [isLight, setIsLight] = useState(true);
    return (
        <ThemeContext.Provider value={{ isLight, setIsLight }}>
            {children}
        </ThemeContext.Provider>
    )
}