import { useContext } from "react";
import { ThemeContext } from "../../Contexts/Theme/ThemeContext";
import ToggleTheme from "./ToggleTheme/ToggleTheme";

const logoLightTheme = '/assets/images/logo-light-theme.svg';
const logoDarkTheme = '/assets/images/logo-dark-theme.svg'

export default function Nav() {
    const { isLight } = useContext(ThemeContext);
    return (
        <nav className={`w-[92vw] mx-auto flex items-center justify-between`}>
            <img src={ isLight? logoLightTheme: logoDarkTheme} alt='logo' className={`h-[30px]`} />
            <ToggleTheme/>
        </nav>
    )
}