import React from "react";
import { useState } from "react";

const exampleClassList = ["CSE420", "CSE441", "CSE422"]; //this should be the php input

export default function ClassSelection() {
  const [result, setResult] = useState([]);

  function updateSearchResult(event) {
    const searchValue = event.target.value.toUpperCase();

    setResult(exampleClassList.filter((e) => e.includes(searchValue)));
  }

  function highlightText(event) {
    event.target.select();
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
                        <button>{currClass}</button>
                    </li>
                    ))
                }
            </ul>
      </div>
      <div>
            <button>enter?</button>
      </div>
    </>
  );
}