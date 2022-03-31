import logo from "./logo.svg";
import "./App.css";
import InputGroup from "./components/InputGroup";
import WordOutput from "./components/WordOutput";
import React, { useState } from "react";

const App = (props) => {
    // Define state variables
    const [inputValue, setInputValue] = useState("");
    const [savedWordsArray, setSavedWordsArray] = useState([]);
    const [dataMuseResults, setDataMuseResults] = useState([]);
    const [resultsDescription, setResultsDescription] = useState("");
    const [loadingMessage, setLoadingMessage] = useState("");

return (
      <main className="container">
        <h1 className="row">Rhyme Finder (579 Problem Set 5)</h1>
        <h2>YOUR GITHUB CODE LINK GOES HERE</h2>

        <div className="row">
            <div className="col">Saved words: <span>{savedWordsArray}</span></div>
        </div>
        <div className="row">
            {/*// Pass state variables as props to InputGroup component*/}
            <InputGroup
                inputValue={inputValue}
                setInputValue={setInputValue}
                dataMuseResults={dataMuseResults}
                setDataMuseResults={setDataMuseResults}
                resultsDescription={resultsDescription}
                setResultsDescription={setResultsDescription}
                loadingMessage={loadingMessage}
                setLoadingMessage={setLoadingMessage}
            />
        </div>
        <div className="row">
            {/*// Describe whether results are rhymes or syllables and what the word input is*/}
            <h2 className="col">
                {resultsDescription}
            </h2>
            <p>{loadingMessage}</p>
        </div>
        <div className="output row">
            {/*// Display word results*/}
            <WordOutput
                dataMuseResults={dataMuseResults}
                savedWordsArray={savedWordsArray}
                setSavedWordsArray={setSavedWordsArray}
            />
        </div>
    </main>
)};

export default App;
