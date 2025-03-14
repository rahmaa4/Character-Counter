import { useContext } from "react";
import ToggleTheme from "./ToggleTheme/ToggleTheme";
import { ThemeContext } from "../../Contexts/Theme/ThemeContext";

const logoLightTheme = '/assets/images/logo-light-theme.svg';
const logoDarkTheme = '/assets/images/logo-dark-theme.svg'
export default function Nav() {
    const { isLight } = useContext(ThemeContext);
    return (
        <nav className={`flex items-center justify-between`}>
            <img src={ isLight? logoLightTheme: logoDarkTheme} alt='logo' className={`h-[30px]`} />
            <ToggleTheme/>
        </nav>
    )
}