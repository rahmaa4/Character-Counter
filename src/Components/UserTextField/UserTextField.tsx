import { useContext } from "react"
import { ThemeContext } from "../../Contexts/Theme/ThemeContext"

export default function UserTextField() {
    const { isLight } = useContext(ThemeContext);
    return <textarea className={`block min-h-[150px] w-[85vw] mx-auto mt-8 rounded-md ${isLight ? 'bg-neutral100 placeholder:text-neutral900 text-neutral900' : 'bg-neutral700 placeholder:text-neutral100 text-neutral200'} p-3 outline-none placeholder:text-sm`} placeholder="Start typing here...(or paste your text)">
    </textarea>
}