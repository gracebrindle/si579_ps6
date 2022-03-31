import {useState} from "react";
import SaveWords from './SaveWords'

// Use the Datamuse results to display the word output
function ShowSyllables(props) {
    const {dataMuseResults} = props;
    const output = [];

    for (const [key, value] of Object.entries(dataMuseResults)) {
        // Append the following to the output array
        output.push(
            <ul>
                        <li>
                            {value.word}
                            <button onClick={SaveWords}>Save</button>
                        </li>
                </ul>
        );
    }

    // Return the output array with the results
    return <ul>{output}</ul>;
};

export default ShowSyllables