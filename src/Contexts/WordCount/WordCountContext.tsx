import {useState, createContext } from "react";

type WordCountContextType = {
    wordCount: number,
    setWordCount: React.Dispatch<React.SetStateAction<number>>
}

export const WordCountContext = createContext<WordCountContextType>({wordCount:0, setWordCount: () => {}})

export default function WordCount({children} : {children : React.ReactNode}) {
    const [wordCount, setWordCount] = useState(0);
    return (
        <WordCountContext.Provider value={{wordCount, setWordCount}}>
            {children}
        </WordCountContext.Provider>
    )
}