import { useContext } from "react";
import { ThemeContext } from "../../../Contexts/Theme/ThemeContext";

const iconMoon = '/assets/images/icon-moon.svg';
const iconSun = 'assets/images/icon-sun.svg';

export default function ToggleTheme() {
    const { isLight, setIsLight } = useContext(ThemeContext);

    return <button onClick={() => setIsLight((prev) => !prev) } className={`${isLight? 'bg-neutral100' : 'bg-neutral700'} p-1 w-[32px] aspect-square flex items-center justify-center rounded-sm hover:cursor-pointer`}>
        <img src={ isLight? iconMoon : iconSun} className={`w-[18px] aspect-square`} />
    </button>
}