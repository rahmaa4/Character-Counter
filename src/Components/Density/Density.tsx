import { useEffect, useRef, useState, useContext} from "react";
import LetterCount from "./LetterCount/LetterCount";
import { alphabetObject } from "../../Utils/constants";
import { ThemeContext } from "../../Contexts/Theme/ThemeContext";

const downChevronLightTheme = "/assets/images/down-chevron-light.svg";
const downChevronDarkTheme = "/assets/images/down-chevron-dark.svg"; 

export default function Density({userInput, charCount}: {userInput: string; charCount: number;}) {
  const [alphabet, setAlphabet] = useState(alphabetObject);
  const [isSeeMore, setIsSeeMore] = useState(false);
  const { isLight } = useContext(ThemeContext);
  const initialAlphabetObject = useRef(alphabetObject);
  const lettersInAlphabet = Object.keys(alphabetObject);
  let displayCount = 0;
  let indexToStopAt: number = 0;

useEffect(() => {
  let letterDensity = { ...initialAlphabetObject.current };
  for (let i = 0; i < userInput.length; i++) {
    let currentChar = userInput[i].toLowerCase();
    if (currentChar && lettersInAlphabet.includes(currentChar)) {
      letterDensity[currentChar] = (letterDensity[currentChar] || 0) + 1;
    }
  }
  setAlphabet(letterDensity);
}, [userInput]); 
  

  return (
    <div>
      {Object.entries(alphabet).map((letter, index) => {
        if (letter[1] > 0 && displayCount <= 5) {
          displayCount++;
          indexToStopAt = index;
          return (
            <LetterCount
              key={`letter-${index}`}
              letter={letter[0]}
              count={letter[1]}
              charCount={charCount}
            />
          );
        }
      })}
      {
        isSeeMore && Object.entries(alphabet).map((letter, index) => {
        if (letter[1] > 0 && index > indexToStopAt) {
          return (
            <LetterCount
              key={`letter-${index}`}
              letter={letter[0]}
              count={letter[1]}
              charCount={charCount}
            />
          );
        }
      })}
      <div className={`flex items-center mb-2`} onClick={() => setIsSeeMore((prev) => !prev)}>
        <button className={`pr-2 text-lg font-medium`}>{isSeeMore && userInput.length > 0? 'See Less': 'See More'}</button>
        <img src={isLight ? downChevronLightTheme : downChevronDarkTheme} alt="chveron icon" className={`${isSeeMore && userInput.length > 0? 'rotate-180' : null}`} />
      </div>
      <p className={`${userInput.length > 0 ? 'hidden' : 'block'} text-sm`}>No characters found. Start typing to see letter density.</p>
    </div>
  );
}
