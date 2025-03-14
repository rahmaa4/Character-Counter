import { useContext, useEffect } from "react";
import Nav from "../Components/Nav/Nav";
import { ThemeContext } from "../Contexts/Theme/ThemeContext";


const bgImageLight = '/assets/images/bg-noise-light.png';
const bgImageDark = '/assets/images/bg-noise-dark.png';

export default function App() {
    const { isLight } = useContext(ThemeContext);

    useEffect(() => {
        document.documentElement.style.backgroundImage = `url(${bgImageLight})`;
        document.documentElement.style.backgroundSize = 'cover';
    }, []);

    useEffect(() => {
        if (isLight) {
        document.documentElement.style.backgroundImage = `url(${bgImageLight})`;
        document.documentElement.style.backgroundColor = '#fff'
            
        } else {
            document.documentElement.style.backgroundColor = '#12131A'
            document.documentElement.style.backgroundImage = `url(${bgImageDark})`;
        }
    }, [isLight]);

    return (
        <>
            <Nav/>
        </>
    )
}