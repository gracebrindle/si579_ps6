import {useState} from "react";

// Implement the GroupBy function in JSX
function GroupBy(objects, property) {
    // If property is not a function, convert it to a function that accepts one argument (an object) and returns that object's
    // value for property (obj[property])
    if (typeof property !== "function") {
        const propName = property;
        property = (obj) => obj[propName];
    }

    const groupedObjects = new Map(); // Keys: group names, value: list of items in that group
    for (const object of objects) {
        const groupName = property(object);
        //Make sure that the group exists
        if (!groupedObjects.has(groupName)) {
            groupedObjects.set(groupName, []);
        }
        groupedObjects.get(groupName).push(object);
    }

    // Create an object with the results. Sort the keys so that they are in a sensible "order"
    const result = {};
    for (const key of Array.from(groupedObjects.keys()).sort()) {
        result[key] = groupedObjects.get(key);
    }
    return result;
}

// Use the Datamuse results to display the word output
function WordOutput(props) {
    const {dataMuseResults} = props;
    // Call the GroupBy function for the datamuse results and group by the number of syllables
    const groupedDict = GroupBy(dataMuseResults, "numSyllables");
    // Create an empty array called 'output' to store the results
    const output = [];


    //*** ADD "(no results)" WHEN THERE ARE 0 WORDS
    // WHY ARE SYLLABLES UNDEFINED

    // For each key:value pair in the grouped data
    // Key = number of syllables; value = words with that number of syllables
    for (const [key, value] of Object.entries(groupedDict)) {
        // Append the following to the output array
        output.push(
            <div key={Math.random()}>
                {/* Create a header with the number of syllables*/}
                <h3>Syllables: </h3>
                <ul>
                    {/* Map the words to the corresponding number of syllables*/}
                    {groupedDict[key].map((value) => (
                        // Create a list item with the word and a save button
                        <li key={Math.random()}>
                            {value.word}
                            <button onClick={SaveWords}>Save</button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
    // Return the output array with the results
    return <ul>{output}</ul>;
}

function SaveWords(e, props) {

    // How do I pull in the savedWords props?
    // const {
    //     savedWordsArray,
    //     setSavedWordsArray
    // } = props;

    let savedWord = (e.target.parentElement.textContent)
    let splicedSavedWord = savedWord.slice(0, -4)

    // How do I add the word to the array?
    // setSavedWordsArray(splicedSavedWord)

    console.log(splicedSavedWord)
}

export default WordOutput;

