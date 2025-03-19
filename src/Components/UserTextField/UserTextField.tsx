import { useContext } from "react"
import { ThemeContext } from "../../Contexts/Theme/ThemeContext"
import { IsCharLimitContext } from "../../Contexts/IsCharLimit/IsCharLimitContext";

type UserTextFieldProp = {
    setUserInput: React.Dispatch<React.SetStateAction<string>>,
    charLimit: number
}

export default function UserTextField({setUserInput, charLimit} : UserTextFieldProp) {
    const { isLight } = useContext(ThemeContext);
    const { isCharLimit } = useContext(IsCharLimitContext);

    const handleInput = ({target}:React.ChangeEvent<HTMLTextAreaElement>) => {
        target as HTMLTextAreaElement;
        setUserInput(target.value);
    }



    return <textarea onInput={handleInput} maxLength={ isCharLimit? charLimit: Infinity} className={`block min-h-[150px] w-[92vw] outline-none mx-auto mt-8 mb-4 rounded-md ${isLight ? 'bg-neutral100 placeholder:text-neutral900 text-neutral900' : 'bg-neutral700 placeholder:text-neutral100 text-neutral200'} p-3 placeholder:text-sm hover:cursor-pointer 
    focus:border focus:border-purple500 focus:shadow-purple500 focus:shadow-md resize-none `} placeholder="Start typing here...(or paste your text)">
    </textarea>
}