import { useEffect, useState, useContext} from "react"
import { ThemeContext } from "../../Contexts/Theme/ThemeContext";
import SubjectButton from "./Button/Button";
import { iconArrowDarkTheme, iconArrowLightTheme } from "../../Utils/constants";


export default function FunFact() {
    const { isLight } = useContext(ThemeContext);
    const [data, setData] = useState<Record<string, any>[]>([]);
    
    const getFacts = async () => {
        try {
            const data = await fetch('/data.json');
            if (data.ok) {
                const facts = await data.json();
                return facts.facts;
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    
    useEffect(() => {
        const factArr = async () => {
            const result = await getFacts();
            setData(result)
        }
        factArr();
    }, []);
   
    return (
        <div className={`flex flex-col items-center mobileLg: responMobileLg `}>
            <p className={`text-sm my-2 ${isLight ? 'text-neutral900' : 'text-neutral200'} flex items-start gap-[10px] md:text-lg tracking-[-1px]`}><span className={`font-medium`}>Explore fun facts!</span>{isLight ? iconArrowLightTheme : iconArrowDarkTheme}</p>
            <div>
                <div className={`mt-1 flex items-center`}>
                    {data.length > 0 && data.map((obj, index) => {
                        if (index < 4) {
                            return <SubjectButton key={`subj-${index}`} subject={obj.subject} fact={obj.fact} title={obj.title}/>
                        }
                        })}
                </div>
                <div className={`mt-3 flex items-center`}>
                    {data.length > 0 && data.map((obj, index) => {
                            if (index >= 4) {
                                return <SubjectButton key={`subj-${index}`} subject={obj.subject} fact={obj.fact} title={obj.title} />
                            }
                        })}
                </div>
            </div>
        </div>
    )
}