import { useContext } from "react";
import CheckBox from "./Checkbox/Checkbox";
import { ThemeContext } from "../../Contexts/Theme/ThemeContext";

export default function FilterOptions() {
    const { isLight } = useContext(ThemeContext);
    return (
        <div className={`mt-2 w-[85vw] mx-auto flex flex-col gap-2 ${isLight? 'text-neutral900' : 'text-neutral200'}`}>
            <div className={`flex flex-col gap-2`}>
                <CheckBox type='is-exclude-spaces' />
                <CheckBox type='is-char-limit'/>
            </div>
            <p className={`text-sm`}>Approx. reading time: </p>
        </div>
    )
}