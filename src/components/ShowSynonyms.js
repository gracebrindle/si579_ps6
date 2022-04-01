import {useState} from "react";

// Use the Datamuse results to display the word output
function ShowSynonyms(props) {
    const {dataMuseResults,
        savedWordsArray,
        setSavedWordsArray,
        noResults
    } = props;
    let output = [];

    function saveWords(word) {
        setSavedWordsArray((savedWordsArray) => {
            const updatedSavedWords = [word,
                ...savedWordsArray
            ]
            return updatedSavedWords
        })
    }

    if (noResults) {
        output=[]
    }
    else{
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
    }
    }

    // Return the output array with the results
    return <ul>{output}</ul>;
};





export default ShowSynonyms