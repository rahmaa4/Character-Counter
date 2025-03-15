import { useContext } from "react";
import { ThemeContext } from "../../../Contexts/Theme/ThemeContext";

const bulb = 'assets/images/bulb.svg';
const iconBackArrowDark = 'assets/images/icon-back-dark.svg';
const iconBackArrowLight = 'assets/images/icon-back-light.svg';


type FactModalProp ={
        subject: string,
        fact: string, 
        title:string,
        isDisplayFact: boolean,
        setIsDisplayFact: React.Dispatch<React.SetStateAction<boolean>>
    };

export default function FactModal({ subject, fact, title, isDisplayFact, setIsDisplayFact }: FactModalProp) {
    const { isLight } = useContext(ThemeContext);

    return (
        <div className={`${isDisplayFact ? 'fixed' : 'hidden'} h-screen w-full right-0 left-0 flex items-center justify-center`}>
            <div className={`w-[75vw] aspect-[2/1] modalBox px-3 py-2 ${isLight? 'backgroundLight text-neutral900 boxShadowModalLight': 'backgroundDark text-neutral200 boxShadowModalDark'}`}>
                <div className={`flex justify-between items-center mb-2`}>
                    <p className={`text-sm border rounded-sm w-fit px-1 h-fit `}>{subject}</p>
                    <button onClick={() => setIsDisplayFact((prev) => !prev)} className={`flex items-center gap-2 text-sm`}>back<img src={isLight? iconBackArrowLight : iconBackArrowDark} alt='back arrow' className={`w-[9px] aspect-square`} /></button>
                </div>
                <div className={`flex flex-col items-center py-2 gap-2`}>
                    <div className={`flex justify-between items-center gap-x-3`}>
                        <img src={bulb} alt='bulb' className={`w-[22px]`}/> 
                        <h2 className={`tracking-[-1.5px] font-bold`}>{title}</h2>
                    </div>
                    <p className={`text-sm text-center`}>'{fact}'</p>
                </div>
            </div>
        </div>
    )
}