import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../Contexts/Theme/ThemeContext";
import { WordCountContext } from "../Contexts/WordCount/WordCountContext";
import { IsExcludeSpacesContext } from "../Contexts/IsExcludeSpaces/IsExcludeSpacesContext";
import Nav from "../Components/Nav/Nav";
import Title from "../Components/Title/Title";
import FunFact from "../Components/FunFact/FunFact";
import UserTextField from "../Components/UserTextField/UserTextField";
import FilterOptions from "../Components/FilterOptions/FilterOptions";
import CountCard from "../Components/Count/CountCard/CountCard";
import Density from "../Components/Density/Density";


export default function App() {
    const { isLight } = useContext(ThemeContext);
    const { setWordCount } = useContext(WordCountContext);
    const [userInput, setUserInput] = useState('');
    const [charLimit, setCharLimit] = useState(Infinity);
    const { isExcludeSpaces } = useContext(IsExcludeSpacesContext);
    const [charCount, setCharCount] = useState(0);
    const [sentenceCount, setSentenceCount] = useState(0);


    useEffect(() => {
        document.body.classList.add(`backgroundLight`)
    }, [])

    useEffect(() => {
        if (isLight) {
            document.body.classList.remove('backgroundDark');
            document.body.classList.add(`backgroundLight`);
        } else {
            document.body.classList.remove('backgroundLight');
            document.body.classList.add('backgroundDark');
        }
    }, [isLight])

    const calculateScores = (userInput:string) => {
        let totalChars = 0;
        let totalWords = 0;
        let totalSentences = 0;
        for (let i = 0; i < userInput.length; i++) {
            if (isExcludeSpaces) {
                if (userInput[i] !== ' ') {
                    totalChars++;
                }
            } else {
                totalChars++
                if (userInput[i] === ' ') {
                    totalWords++;
                }
                if (userInput[i] === '.') {
                    totalSentences++;
                }
            }
        }
        setCharCount(totalChars);
        setWordCount(totalWords);
        setSentenceCount(totalSentences);
    }



    useEffect(() => {
        calculateScores(userInput);
    }, [userInput])

  
    return (
        <>
            <Nav />
            <Title />
            <FunFact />
            <UserTextField setUserInput={setUserInput} charLimit={charLimit} charCount={charCount} />
            <FilterOptions setCharLimit={setCharLimit} />
            <div className={`flex flex-col gap-8 mt-8`}>
                <CountCard type={'char-count'} charCount={charCount} />
                <CountCard type={'word-count'} />
                <CountCard type={'sentence-count'} sentenceCount={sentenceCount} />
            </div>
            <div className={`mt-8 w-[90vw] mx-auto ${isLight? 'text-neutral900' : 'text-neutral200'}`}>
                <h2 className={`mb-3 text-xl font-medium`}>Letter Density</h2>
                <Density userInput={userInput} charCount={charCount} /> 
            </div>
        </>
    )
}