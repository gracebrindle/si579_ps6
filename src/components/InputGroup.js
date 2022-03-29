import React from "react";
import ShowRhymes from "./components/WordEntry";
import { useState, useEffect, useRef } from "react";

const InputGroup = (props) => {
    const [words, setWords] = useState([]);
    const inputRef = useRef();

    // Retrieve the proper URL based on whether the search is for a rhyme or a similar word
    function getDatamuseUrl(type, wordInput) {
        if (type === "rhyme") {
            let url = `https://api.datamuse.com/words?${(new URLSearchParams({'rel_rhy': wordInput.value})).toString()}`;
        }
        else {
            let url = `https://api.datamuse.com/words?${(new URLSearchParams({'ml': wordInput.value})).toString()}`
        }
    }

    // Fetch the data from the API and store the results in the words array
    useEffect((url) => {
        fetch(url)
            .then((response) => response.json())
            .then((json) => setWords(Object.values(json)));
    }, []);

    const ShowRhymes = (wordInput) => {
        getDatamuseUrl(wordInput)

    }

    // Add keyboard functionality so it runs the program when 'enter' is pressed
    const keyDownHandler = (e) => {
        if (e.key === 'Enter') {
            ShowRhymes()
        }
    }

    return(
        <div className="row">
        <div className="input-group col">
            <input
                ref={inputRef}
                className="form-control"
                type="text"
                placeholder="Enter a word"/>

            <button
                type="button"
                className="btn btn-primary"
                // How do I pass the word input into the WordEntry function?
                onClick={ShowRhymes}>Show rhyming words
            </button>

            <button>
                type="button"
                className="btn btn-secondary"
                    Show synonyms
            </button>
        </div>
    </div>)

};
export default InputGroup