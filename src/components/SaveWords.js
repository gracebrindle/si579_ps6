import {useState} from "react";

function SaveWords(props) {

    const {
            e,
        savedWordsArray,
        setSavedWordsArray
    } = props;

    let savedWord = (e.target.parentElement.textContent)
    let splicedSavedWord = savedWord.slice(0, -4)
    setSavedWordsArray.push(splicedSavedWord)

    console.log(splicedSavedWord)
}

export default SaveWords;