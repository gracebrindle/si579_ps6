import './App.css';
import WordEntry from "./components/WordEntry";
import InputGroup from "./components/InputGroup";
import React, { useState, useEffect } from 'react';

function App() {
    const defaultWords = [
        {
            word: 'laundry',
            syllables: 2,
        },
        {
            word: 'grace',
            syllables: 1,
        }];

    const [words, setWords] = useState(defaultWords);

return (
      <main className="container">
        <h1 className="row">Rhyme Finder (579 Problem Set 5)</h1>
        <h2>YOUR GITHUB CODE LINK GOES HERE</h2>

        <div className="row">
          <div className="col">Saved words: <span></span></div>
        </div>

        < InputGroup />

          <div className = "results">
              <div className="row">
                  <h2 className="col" id="output_description">Words that Rhyme With: </h2>
              </div>
              <div className="output row">
                  <output id="word_output" className="col">
                      <ul className="row">
                          {/*{defaultWords.map((item) =>*/}
                          {/*    <RhymeFinder word={item.word} syllables={item.syllables} />*/}
                          {/*)}*/}
                      </ul>
                  </output>
              </div>
          </div>
      </main>);
};

export default App;
