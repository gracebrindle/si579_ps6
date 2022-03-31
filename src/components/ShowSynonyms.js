import {useState} from "react";

// Use the Datamuse results to display the word output
function ShowSynonyms(props) {
    const {dataMuseResults,
        savedWordsArray,
        setSavedWordsArray,
        noResults,
        setNoResults
    } = props;
    const output = [];

    function saveWords(word) {

        console.log(word)
    }

    for (const [key, value] of Object.entries(dataMuseResults)) {
        // Append the following to the output array
        output.push(
            <div key={Math.random()}>
                <ul>
                        <li key={Math.random()}>
                                {value.word}
                                <button onClick={()=>saveWords(value.word)}>Save</button>
                            </li>
                    </ul>
            </div>
        );

        console.log(output)
        console.log(dataMuseResults)

        if (!dataMuseResults) {
            setNoResults(true)
            console.log(noResults)
        }

    }

    // Return the output array with the results
    return <ul>{output}</ul>;
};





export default ShowSynonyms