import { useContext, useEffect } from "react";
import Nav from "../Components/Nav/Nav";
import { ThemeContext } from "../Contexts/Theme/ThemeContext";
import FunFact from "../Components/FunFact/FunFact";
import Title from "../Components/Title/Title";


export default function App() {
    const { isLight } = useContext(ThemeContext);  

    useEffect(() => {
        document.body.classList.add(`backgroundLight`)
    }, [])

    useEffect(() => {
        if (isLight) {
            document.body.classList.remove('backgroundDark');
            document.body.classList.add(`backgroundLight`);
        } else {
            document.body.classList.remove('backgroundLight');
            document.body.classList.add('backgroundDark');
        }
    }, [isLight])
  
    return (
        <>
            <Nav />
            <Title/>
        </>
    )
}