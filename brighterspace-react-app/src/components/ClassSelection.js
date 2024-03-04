import React from "react";
import { useState } from "react";

const exampleClassList = ["CSE420", "CSE441", "CSE422"]; //this should be the php input

export default function ClassSelection() {
  const [selectedClass, setSelectedClass] = useState("asdasd"); //this should be empty by default and this should have the selected class
  const [result, setResult] = useState([]);

  function updateSearchResult(event) {
    const searchValue = event.target.value.toUpperCase();

    setResult(exampleClassList.filter((e) => e.includes(searchValue)));
  }

  function highlightText(event) {
    event.target.select();
  }

  function recordSelectedClass(event) {
    const classValue = event.target.innerText;
    setSelectedClass(classValue);
  }

  return (
    <>
      <div class="searchBar">
        <input
          type="text"
          placeholder="Search"
          onInput={updateSearchResult}
          onFocus={highlightText}
        />
      </div>
      <div class="searchResult">
            <ul>
                {
                    result.map((currClass) => (
                    <li key={currClass}>
                        <button onClick={recordSelectedClass}>{currClass}</button>
                    </li>
                    ))
                }
            </ul>
      </div>
      <div>
            <button>this does nothing for now</button>
      </div>
      <div>
        {
          <h2>{selectedClass}</h2>
        }
      </div>
    </>
  );
}