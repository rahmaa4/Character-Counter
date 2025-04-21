import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../Contexts/Theme/ThemeContext";

type LetterCountProp = {
    letter: string,
    count: number,
    charCount: number
}
export default function LetterCount({ letter, count, charCount }: LetterCountProp) {
    const [percentage, setPercentage] = useState((count / charCount) * 100);
    const { isLight } = useContext(ThemeContext);
    useEffect(() => { setPercentage((count / charCount) * 100) }, [charCount]);
    return (
        <div className={`flex items-center justify-between gap-2 mb-2`}>
            <div className={`flex items-center gap-2 w-full`} >
                <p className={`uppercase w-[16px]`}>{letter}</p>
                <div className={`relative w-full ${isLight ? 'bg-neutral200' : 'bg-neutral700'} h-[13px] rounded-xl`}>
                    <div style={{width: `${percentage}%`}} className={`bg-purple400 absolute h-full rounded-xl`}></div>
                </div>
            </div>
            <p className={`w-[87px]`}>{count} ({percentage.toFixed(1)}%) </p>
        </div>
    )
}