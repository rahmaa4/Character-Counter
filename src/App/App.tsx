import { useContext, useEffect } from "react";
import { ThemeContext } from "../Contexts/Theme/ThemeContext";
import Nav from "../Components/Nav/Nav";
import Title from "../Components/Title/Title";
import FunFact from "../Components/FunFact/FunFact";
import UserTextField from "../Components/UserTextField/UserTextField";
import FilterOptions from "../Components/FilterOptions/FilterOptions";

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
            <Title />
            <FunFact />
            <UserTextField />
            <FilterOptions/>
        </>
    )
}