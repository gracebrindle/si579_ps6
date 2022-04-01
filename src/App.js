import logo from "./logo.svg";
import "./App.css";
import InputGroup from "./components/InputGroup";
import ShowRhymes from "./components/ShowRhymes";
import ShowSynonyms from "./components/ShowSynonyms";
import React, { useState } from "react";

const App = (props) => {
    // Define state variables
    const [inputValue, setInputValue] = useState("");
    const [savedWordsArray, setSavedWordsArray] = useState([]);
    const [dataMuseResults, setDataMuseResults] = useState([]);
    const [resultsDescription, setResultsDescription] = useState("");
    const [loadingMessage, setLoadingMessage] = useState("");
    const [isRhyme, setIsRhyme] = useState(false)
    const [noResults, setNoResults] = useState(false)

    return (
        <main className="container">
            <h1 className="row">Rhyme Finder (579 Problem Set 5)</h1>
            <h2>https://github.com/gracebrindle/si579_ps6</h2>

            <div className="row">
                <div className="col">Saved words: <span>{savedWordsArray.join(', ')}</span></div>
            </div>
            <div className="row">
                {/*// Pass state variables as props to InputGroup component*/}
                <InputGroup
                    setInputValue={setInputValue}
                    inputValue={inputValue}
                    setDataMuseResults={setDataMuseResults}
                    setResultsDescription={setResultsDescription}
                    setLoadingMessage={setLoadingMessage}
                    setIsRhyme={setIsRhyme}
                    setNoResults={setNoResults}
                />
            </div>
            <div className="row">
                {/*// Describe whether results are rhymes or syllables and what the word input is*/}
                <h2 className="col">
                    {resultsDescription}
                </h2>
            </div>
            <div className="output row">
                {/*// Display word results*/}
                <p>{loadingMessage}</p>
                {noResults ? ("(no results)"): ""}
                {isRhyme ? <ShowRhymes
                        dataMuseResults={dataMuseResults}
                        setSavedWordsArray={setSavedWordsArray}
                        noResults={noResults}
                    />:

                    <ShowSynonyms dataMuseResults={dataMuseResults}
                                  setSavedWordsArray={setSavedWordsArray}
                                  noResults={noResults}
                    />}
            </div>
        </main>
    )};

export default App;