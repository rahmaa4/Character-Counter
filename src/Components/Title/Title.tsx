import { useContext } from "react";
import { ThemeContext } from "../../Contexts/Theme/ThemeContext";
import FunFact from "../FunFact/FunFact";

export default function Title() {
    const { isLight } = useContext(ThemeContext);

    return (
        <div className={`flex flex-col items-center mt-16`}>
            <div className={`flex flex-col items-center gap-y-1 text-center ${isLight? 'text-neutral900': 'text-neutral200'}`}>
                <h1 className={`text-2xl font-bold tracking-[-2.5px]`}>Analyse your text in real-time.</h1>
                <p className={'leading-[1.3]'}>Write. Count. Perfect - Keep track of your written assignments with ease!</p>
            </div>
            <FunFact/>
        </div> 
    )
}