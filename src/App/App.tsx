import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../Contexts/Theme/ThemeContext";
import Nav from "../Components/Nav/Nav";
import Title from "../Components/Title/Title";
import FunFact from "../Components/FunFact/FunFact";
import UserTextField from "../Components/UserTextField/UserTextField";
import FilterOptions from "../Components/FilterOptions/FilterOptions";
import CountCard from "../Components/Count/CountCard/CountCard";

export default function App() {
    const { isLight } = useContext(ThemeContext);  
    const [userInput, setUserInput] = useState('');
    const [charLimit, setCharLimit] = useState(Infinity);

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
  
    return (
        <>
            <Nav />
            <Title />
            <FunFact />
            <UserTextField setUserInput={setUserInput} charLimit={charLimit} />
            <FilterOptions setCharLimit={setCharLimit} />
            <div className={`flex flex-col gap-8 mt-8`}>
                <CountCard type={'char-count'} userInput={userInput} />
                <CountCard type={'word-count'} userInput={userInput} />
                <CountCard type={'sentence-count'} userInput={userInput} />
            </div>
        </>
    )
}