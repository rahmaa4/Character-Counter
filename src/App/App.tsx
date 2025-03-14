import { useContext, useEffect } from "react";
import Nav from "../Components/Nav/Nav";
import { ThemeContext } from "../Contexts/Theme/ThemeContext";

export default function App() {
    const { isLight } = useContext(ThemeContext);

    useEffect(() => {
        document.documentElement.style.backgroundColor = isLight ? '#fff' : '#12131A'
    }, [isLight]);

    return (
        <>
            <Nav/>
        </>
    )
}