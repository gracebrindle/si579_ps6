import React from "react";

const InputGroup = (props) => {
    // Define props that were passed in through App
    const {
        inputValue,
        setInputValue,
        setResultsDescription,
        setDataMuseResults,
        loadingMessage,
        setLoadingMessage
    } = props;


    // Fetch rhymes from Datamuse using the word input
    const ShowRhymes = () => {
        // Set the loading message
        setLoadingMessage("loading...")
        fetch(
            // Adjust API URL to include the inputValue
            `https://api.datamuse.com/words?${new URLSearchParams({
                rel_rhy: inputValue,
            }).toString()}`
        )
            .then((response) => response.json())
            .then((json) => {
                // CLear the loading message
                setLoadingMessage("");
                // Store the data in DataMuseResults
                setDataMuseResults(json);
                // Set the results header
                setResultsDescription(`Words that rhyme with ${inputValue}`);
            });
    };

    // Fetch syllables from Datamuse using the word input
    const ShowSynonyms = () => {
        // Set the loading message
        setLoadingMessage("loading...")
        fetch(
            `https://api.datamuse.com/words?${new URLSearchParams({
                ml: inputValue,
            }).toString()}`
        )
            .then((response) => response.json())
            .then((json) => {
                // Clear the loading message
                setLoadingMessage("");
                // Store the data in DataMuseResults
                setDataMuseResults(json);
                // Set the results header
                setResultsDescription(`Words with a meaning similar to ${inputValue}`);
            });
    };

    // Call ShowRhymes() when 'enter' is pressed
    const keyDownHandler = (e) => {
        if (e.key === 'Enter') {
            ShowRhymes()
        }
    }

    return (
        <div className="input-group col">
            <input
                onKeyDown={keyDownHandler}
                className="form-control"
                value={inputValue}
                 // Set the value of the InputValue when the input is changed
                onChange={(event) => setInputValue(event.target.value)}
                type="text"
                placeholder="Enter a word"
            />
            {/*// Call ShowRyhmes when clicked*/}
            <button onClick={ShowRhymes}>Show rhyming words</button>
            {/*// Call ShowSyllables when clicked*/}
            <button onClick={ShowSynonyms}>Show synonyms</button>
        </div>
    );
};

export default InputGroup