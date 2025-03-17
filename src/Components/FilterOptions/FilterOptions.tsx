import { useContext, useEffect, useState } from "react";
import CheckBox from "./Checkbox/Checkbox";
import { ThemeContext } from "../../Contexts/Theme/ThemeContext";
import { WordCountContext } from "../../Contexts/WordCount/WordCountContext";

export default function FilterOptions({setCharLimit}: {setCharLimit: React.Dispatch<React.SetStateAction<number>> }) {
    const { isLight } = useContext(ThemeContext);
    const { wordCount } = useContext(WordCountContext);
    const [readingTime, setReadingTime] = useState(0);
    const [timeToReadMessage, setTimeToReadMessage] = useState('0 minutes');

    useEffect(() => {
        setReadingTime(() => {
           return Math.ceil(wordCount/250)
        })
    }, [wordCount]);

    useEffect(() => {
        if (readingTime < 1) {
            setTimeToReadMessage('<1 minute')
        } else if (readingTime === 1) {
                setTimeToReadMessage('1 minute')
        }else {
            setTimeToReadMessage(`${readingTime} minutes`);
        }
    }, [readingTime])


    return (
        <div className={`mt-2 w-[90vw] mx-auto flex flex-col gap-2 ${isLight? 'text-neutral900' : 'text-neutral200'}`}>
            <div className={`flex flex-col gap-2`}>
                <CheckBox type='is-exclude-spaces' />
                <CheckBox type='is-char-limit' setCharLimit={setCharLimit}/>
            </div>
            <p className={`text-sm`}>Approx. reading time: {timeToReadMessage} </p>
        </div>
    )
}