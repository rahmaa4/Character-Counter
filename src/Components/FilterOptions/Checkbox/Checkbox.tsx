import { useContext} from "react"
import { IsCharLimitContext } from "../../../Contexts/IsCharLimit/IsCharLimitContext"
import { IsExcludeSpacesContext } from "../../../Contexts/IsExcludeSpaces/IsExcludeSpacesContext";


const iconCheck = 'assets/images/icon-check.svg';

type CheckBoxProp = {
    type: 'is-exclude-spaces' | 'is-char-limit'
}


export default function CheckBox({type}: CheckBoxProp) {
    const { isCharLimit, setIsCharLimit } = useContext(IsCharLimitContext);
    const { isExcludeSpaces, setIsExcludeSpaces } = useContext(IsExcludeSpacesContext);

    const handleClick = () => {
        if (type === 'is-exclude-spaces') { 
            setIsExcludeSpaces((prev) => !prev);
        }else if (type === 'is-char-limit') {
            setIsCharLimit((prev) => !prev);
        }
    }

    return (
        <div className={`flex items-center gap-2`}>
            <div onClick={handleClick} className={`w-[18px]
                 aspect-square border rounded flex justify-center items-center ${type === 'is-char-limit' && isCharLimit ? 'bg-purple400 border-none' : ''} ${type === "is-exclude-spaces" && isExcludeSpaces ? 'bg-purple400 border-none' : ''}`}>
                {type === 'is-char-limit' && isCharLimit || type === 'is-exclude-spaces' && isExcludeSpaces ? <img src={iconCheck} alt="check mark" className={`w-[16px] aspect-square`} /> : null}
                 </div>
            <p className={`text-sm capitalize`}>{type === 'is-char-limit' ? 'set character limit' : 'Exclude spaces'}</p>
        </div>
    )
}