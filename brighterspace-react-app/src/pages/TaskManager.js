import React, {useState, useEffect} from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'
import * as Fa6 from "react-icons/fa6";
import "../styles/TaskManager.css"


function TaskManager(){
    const[tasks,setTasks] = useState([]);
    const[newTask, setNewTask] = useState("");



    const update_task = () => {
        const request = new XMLHttpRequest();

        request.open("POST", "http://localhost/s24semesterproject-brighterspace/PHPBackEnd/taskManger.php");
        const credentialsJSON = {"Update": 'Update'};
        update_messages(request, credentialsJSON)
    }
    useEffect(() => {
        // Call the function when the component mounts
        update_task();
    }, []);

    function update_messages(request, credentialsJSON){

        request.onload = () => {
            if (request.readyState === XMLHttpRequest.DONE) {
                if (request.status === 200) {
                    const responseText = request.responseText;
                    const task_data = JSON.parse(responseText)


                    const messages = []

                    for (const key in task_data) {
                        if (task_data.hasOwnProperty(key)) {
                            const value = task_data[key];
                            messages.push(value)
                        }
                    }
                    setTasks(messages)
                    setNewTask("")
                } else {
                    setNewTask("")
                    console.error("Error:", request.status, request.statusText);
                }
            }
        };
        request.send(JSON.stringify(credentialsJSON));
    }
    function handleInputChange(event){
        setNewTask(event.target.value)


    }
    function addTask(){
        const request = new XMLHttpRequest();
        if(newTask.trim() !== "") {

            const credentialsJSON = {"Ticket": newTask.valueOf()};

            request.open("POST", "http://localhost/s24semesterproject-brighterspace/PHPBackEnd/taskManger.php");
            update_messages(request, credentialsJSON)
        }



    }
    function deleteTask(index){
        const request = new XMLHttpRequest();
        const credentialsJSON = {"delete": index};

        request.open("POST", "http://localhost/s24semesterproject-brighterspace/PHPBackEnd/taskManger.php");
        update_messages(request, credentialsJSON)


    }
    function moveTaskUp(index){
        if(index>0){
            const request = new XMLHttpRequest();
            const credentialsJSON = {"addPriority": index};
            request.open("POST", "http://localhost/s24semesterproject-brighterspace/PHPBackEnd/taskManger.php");

            // const updatedTasks = [...tasks];

            update_messages(request, credentialsJSON);
            //     [updatedTasks[index],updatedTasks[index-1]] = [updatedTasks[index-1],updatedTasks[index]]
            // setTasks(updatedTasks)
        }

    }
    function moveTaskDown(index){
        if(index<tasks.length-1){
            const request = new XMLHttpRequest();
            const credentialsJSON = {"subPriority": index};
            request.open("POST", "http://localhost/s24semesterproject-brighterspace/PHPBackEnd/taskManger.php");
            const updatedTasks = [...tasks];
            update_messages(request,credentialsJSON);

        }
    }

    return(
        <div className="manager">
            <h1>Current Tasks</h1>
            <div>
                <input
                    type="text"
                    placeholder="Enter a task.."
                    value={newTask}
                    onChange={handleInputChange}
                />
                <button
                    className="addbutton"
                    onClick={addTask}
                >
                    <FaIcons.FaPlusCircle></FaIcons.FaPlusCircle>
                    Add
                </button>
            </div>
            <ol>
                {tasks.map((task, index) =>
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button
                            className="deletebutton"
                            onClick={() => deleteTask(index)}
                        >
                            <RiIcons.RiDeleteBin6Line></RiIcons.RiDeleteBin6Line>
                            DELETE
                        </button>
                        <button
                            className="movebutton"
                            onClick={() => moveTaskUp(index)}
                        >
                            <FaIcons.FaArrowCircleUp></FaIcons.FaArrowCircleUp>
                            UP
                        </button>
                        <button
                            className="movebutton"
                            onClick={() => moveTaskDown(index)}
                        >
                            <FaIcons.FaArrowCircleDown></FaIcons.FaArrowCircleDown>
                            DOWN
                        </button>

                    </li>
                )}
            </ol>

        </div>
    )

}


export default TaskManager