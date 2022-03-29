import InputGroup from "./components/InputGroup";
import {useState} from ".";

const WordEntry = (props) => {

    return (
        // Create a list item for each word with a save button next to it
        <li className = "word__name">
            {props.word}
            <button
                className='btn btn-sm btn-outline-success save'
                type='button'>
                (save)
            </button>
        </li>)
};

export default WordEntry;