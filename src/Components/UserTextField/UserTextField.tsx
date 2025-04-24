import { useContext } from "react"
import { ThemeContext } from "../../Contexts/Theme/ThemeContext"
import { IsCharLimitContext } from "../../Contexts/IsCharLimit/IsCharLimitContext";

const errorIcon = 'assets/images/error-icon.svg';
type UserTextFieldProp = {
    setUserInput: React.Dispatch<React.SetStateAction<string>>,
    charLimit: number,
    charCount: number
}

export default function UserTextField({setUserInput, charLimit, charCount} : UserTextFieldProp) {
    const { isLight } = useContext(ThemeContext);
    const { isCharLimit } = useContext(IsCharLimitContext);

    const handleInput = ({target}:React.ChangeEvent<HTMLTextAreaElement>) => {
        target as HTMLTextAreaElement;
        setUserInput(target.value);
    }

    return (
        <>
            <textarea onInput={handleInput} maxLength={isCharLimit ? charLimit : Infinity}
                className={`block min-h-[150px] w-[92vw] outline-none mx-auto mt-8 ${(charCount >= charLimit) && isCharLimit ? 'mb-3': 'mb-4'} rounded-md ${isLight ? 'bg-neutral100 placeholder:text-neutral900 text-neutral900' : 'bg-neutral700 placeholder:text-neutral100 text-neutral200'} p-3 placeholder:text-sm hover:cursor-pointer 
        focus:border focus:border-purple500 focus:shadow-purple500 focus:shadow-md resize-none
        ${(charCount >= charLimit) && isCharLimit && 'border border-red500 focus:border-red800 focus:shadow-red800 focus:shadow-sm'}
        md:mt-10 md:w-[75vw] min-h-[185px] lg:w-[45vw] lg:min-h-[230px]`}
                placeholder="Start typing here...(or paste your text)">
            </textarea>
            <div className={`w-[92vw] mx-auto mb-3 flex items-center gap-1 ${(charCount >= charLimit) && isCharLimit? 'block': 'hidden'}  md:w-[75vw] lg:w-[45vw]`}>
                <img src={errorIcon} alt="error icon" />
                <p className={`text-xs text-red800`}>Limit Reached! Your text cannot exceed {charLimit} characters</p>
            </div>
        </>
    )
}