import { useContext } from 'react';
import { WordCountContext } from "../../../Contexts/WordCount/WordCountContext";

const charCountPattern ='/assets/images/pattern-character-count.svg';
const wordCountPattern ='/assets/images/pattern-word-count.svg';
const sentenceCountPattern ='/assets/images/pattern-sentence-count.svg';

type CountCardProp = {
    type: 'char-count' | 'word-count' | 'sentence-count',
    charCount?: number,
    sentenceCount?: number
}

export default function CountCard({ type, charCount, sentenceCount }: CountCardProp) {
    const {wordCount}= useContext(WordCountContext)
   
    let bgColor;
    let label;
    let bgImage;

    switch (type) {
        case 'char-count': {
            label = 'Character count'
            bgColor = 'bg-purple400';
            bgImage = charCountPattern;
            break;
        }
        case 'word-count': {
            label = 'Word count';
            bgColor = 'bg-orange500';
            bgImage = wordCountPattern;
            break;
        }
        case 'sentence-count': {
            label = 'Sentence count';
            bgColor = 'bg-red500';
            bgImage = sentenceCountPattern;
            }
    }



   
    return (
        <div style={{ backgroundImage: `url(${bgImage})`}} className={`rounded-xl w-[85vw] ${bgColor} ml-5 h-[150px] bg-no-repeat bg-right flex flex-col justify-end p-4`}>
            <h2 className={`text-2xl font-semibold`}>{type === 'char-count' ? charCount : type === 'word-count' ? wordCount : type === 'sentence-count' ? sentenceCount : null}</h2>
            <p className={`capitalize font-md text-lg`}>{label}</p>
        </div>
    )
}