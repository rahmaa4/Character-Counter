import React, {createContext, useState } from "react";

type IsCharLimitContext = {
    isCharLimit: boolean,
    setIsCharLimit: React.Dispatch<React.SetStateAction<boolean>>
}

export const IsCharLimitContext = createContext<IsCharLimitContext>({ isCharLimit: false, setIsCharLimit: () => { } });

export default function IsCharLimit({children} : {children: React.ReactNode}) {
    const [isCharLimit, setIsCharLimit] = useState(false);
    return (
        <IsCharLimitContext.Provider value={{isCharLimit, setIsCharLimit}}>
            {children}
        </IsCharLimitContext.Provider>
    )
}