import "../styles/TeacherAddClass.css"
import React from "react";
import { useState } from "react";

/*

INPUT: the list of classid
OUTPUT: JSON{classroom: {classId: , className: , password: }}

Things to consider!!!!!!!:
-repeating classroom names

*/
//outputs
var classId = "";
var className = "";
var password = "";
var classroomName = "";

//input
var classIdList = []; //this should be the php input
fetch("https://www-student.cse.buffalo.edu/CSE442-542/2024-Spring/cse-442e/sprint3testing/s24semesterproject-brighterspace/PHPBackEnd/teacherAddClass.php", {
  method: "GET"
})
.then(response => response.json())
.then(data => {
  //console.log(data); //testing purpose
  classIdList = data;
  //console.log(classIdList); //testing purpose
})
.catch(error => {
  console.error('Error:', error);
});

export default function TeacherAddClass() {
  const [selectedClassId, setSelectedClassId] = useState(""); //return the id of the course
  const [result, setResult] = useState([]);
  const [selectedClassName, setSelectedClassName] = useState(""); //return the name of the classroom
  const [generatedClassroomName, setGeneratedClassroomName] = useState("");
  const [selectedPassword, setSelectedPassword] = useState(""); //return password for the class

  function updateSearchResult(event) {
    const searchValue = event.target.value.toUpperCase();

    setResult(classIdList.filter((e) => e.includes(searchValue)));

    if(searchValue === ""){
      setResult([]);
    }
  }

  function highlightText(event) {
    event.target.select();
  }

  function recordSelectedClassId(event) {
    const classIdValue = event.target.innerText;
    setSelectedClassId(classIdValue);
    setGeneratedClassroomName(classIdValue + "-" + selectedClassName);
    document.getElementById("searchInput").value = "";
    updateSearchResult({ target: { value: '' } });
  }

  function recordClassName(event){
    const classNameValue = event.target.value;
    setGeneratedClassroomName(selectedClassId + "-" + classNameValue);
    setSelectedClassName(classNameValue);
  }

  function recordPassword(event){
    const passwordValue = event.target.value;
    setSelectedPassword(passwordValue);
  }

  function validate(){
    const classNameRegex = /^[A-Z0-9]{1,10}$/
    const passwordRegex = /^[a-zA-Z0-9]{5,20}$/
    if(className === "" || classId === "" || password === ""){
      return false;
    }
    else if(!classNameRegex.test(className) || !passwordRegex.test(selectedPassword)){
      return false;
    }
    else if(!classIdList.includes(classId)){
      return false;
    }
    return true;
  }

  function output() {
    //record
    classId = selectedClassId;
    className = selectedClassName;
    password = selectedPassword;
    classroomName = generatedClassroomName;

    //print
    /*console.log("selectedClassId: " + selectedClassId);
    console.log("selectedClassName: " + selectedClassName);
    console.log("selectedPassword: " + selectedPassword);
    console.log("generatedClassroomName: " + generatedClassroomName);
    console.log("classId: " + classId);
    console.log("className: " + className);
    console.log("password: " + password);
    console.log("classroomName: " + classroomName);*/

    //reset page details
    document.getElementById("name").value = "";
    document.getElementById("password").value = "";
    setSelectedClassId("");
    setSelectedClassName("");
    setSelectedPassword("");
    setGeneratedClassroomName("");
    document.getElementById("searchInput").value = "";
    updateSearchResult({ target: { value: '' } });

    //stop if invalid
    if(!validate()){
      console.log("invalid");
      return;
    }
    //fetch post
    else{
      const dataToSend = {
        classId: classId,
        section: className,
        password: password
      };
      
      fetch("https://www-student.cse.buffalo.edu/CSE442-542/2024-Spring/cse-442e/sprint3testing/s24semesterproject-brighterspace/PHPBackEnd/teacherAddClass.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(dataToSend)
      })
      .then(response => response.text())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });


      console.log("valid, proceeding to store data");
    }

    //reset variables
    classId = "";
    className = "";
    password = "";
    classroomName = "";
  }

  return (
    <>
      <div class="coreTeacherAddClass">
        <div class="form">
          <div class="formLeft">
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
                      <button onClick={recordSelectedClassId}>{currClass}</button>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
          <div class="formRight">
            <h3>Section Name:</h3>
            <input
              id="name"
              type="text"
              placeholder="uppercase and numbers only"
              onInput={recordClassName}
              onFocus={highlightText}
            />
            <h3>Password:</h3>
            <input
              id="password"
              type="password"
              placeholder="letters and numbers only"
              onInput={recordPassword}
              onFocus={highlightText}
            />
          </div>
        </div>
        <div class="confirmation">
          <h2>{generatedClassroomName}</h2>
          <button onClick={output}>Submit</button>
        </div>
      </div>
    </>
  );
}