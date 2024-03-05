import "../styles/TeacherAddClass.css"
import React from "react";
import { useState } from "react";

const exampleClassList = ["CSE420", "CSE441", "CSE422"]; //this should be the php input

export default function ClassSelection() {
  const [selectedClass, setSelectedClass] = useState("asdasd"); //this should be empty by default and this should have the selected class
  const [result, setResult] = useState([]);

  function updateSearchResult(event) {
    const searchValue = event.target.value.toUpperCase();

    setResult(exampleClassList.filter((e) => e.includes(searchValue)));

    if(searchValue === ""){
      setResult([]);
    }
  }

  function highlightText(event) {
    event.target.select();
  }

  function recordSelectedClass(event) {
    const classValue = event.target.innerText;
    setSelectedClass(classValue);
    document.getElementById("searchInput").value = "";
    updateSearchResult({ target: { value: '' } });
  }

  return (
    <>
      <div class="core">
        <div class="searchBar">
          <input
            id="searchInput"
            type="text"
            placeholder="Search Class"
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
        <div class="confirmation">
            <h2>{selectedClass}</h2>
            <button>this does nothing for now</button>
        </div>
      </div>
    </>
  );
}