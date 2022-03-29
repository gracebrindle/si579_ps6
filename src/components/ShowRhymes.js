import InputGroup from "./components/InputGroup";
import WordEntry from "./components/WordEntry";
import {useState} from ".";

const ShowRhymes = (props) => {

    const generateWords = () => {
        const words_list = [];

        // Loop through each word in a list and append it
        props.words.forEach((word, index) =>
            words_list.push(
                <WordEntry>
                word={WordEntry.word})
                </WordEntry>
        )
        )
    }

};

export default ShowRhymes;