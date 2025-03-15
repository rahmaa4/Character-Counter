import { createContext, useState} from "react";

type IsExcludeSpacesContext = {
    isExcludeSpaces: boolean,
    setIsExcludeSpaces: React.Dispatch<React.SetStateAction<boolean>>
}

export const IsExcludeSpacesContext = createContext<IsExcludeSpacesContext>({ isExcludeSpaces: false, setIsExcludeSpaces: () => { } })

export default function IsExcludeSpaces({children}: {children:React.ReactNode}) {
    const [isExcludeSpaces, setIsExcludeSpaces] = useState(false);

    return (
        <IsExcludeSpacesContext.Provider value={{isExcludeSpaces, setIsExcludeSpaces}}>
            {children}
        </IsExcludeSpacesContext.Provider>
    )
}