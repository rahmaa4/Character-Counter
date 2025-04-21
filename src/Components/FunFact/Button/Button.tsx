import { useState, useContext} from "react";
import { ThemeContext } from "../../../Contexts/Theme/ThemeContext";
import FactModal from "../FactModal/FactModal"


type SubjectButtonProp = {
    subject: string,
    fact: string, 
    title: string
}

export default function SubjectButton({ subject, fact, title }: SubjectButtonProp) {
    const { isLight } = useContext(ThemeContext);
    const [isDisplayFact, setIsDisplayFact] = useState(false);

    return (
        <>
            <button onClick={() => setIsDisplayFact((prev) => !prev)} className={`text-sm px-3 py-1 rounded mx-1 h-fit self-center hover:cursor-pointer
                    justify-self-center ${isLight ? 'bg-neutral100  text-neutral900 boxShadowLightButton' : 'bg-neutral700  text-neutral200  boxShadowDarkButton'}
                    md:px-5 
                    `}>{subject}
            </button>
            <FactModal subject={subject} fact={fact} title={title} isDisplayFact={isDisplayFact} setIsDisplayFact={setIsDisplayFact}  />
         </>
    )
}