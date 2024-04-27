import React, {useState, useEffect} from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'
import * as Fa6 from "react-icons/fa6";
import "./TaskManager.css"


function TaskManager(){
    const[tasks,setTasks] = useState([]);
    const[newTask, setNewTask] = useState("");



    const update_task = () => {
        const request = new XMLHttpRequest();
        // todo when change link on server
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
            setTasks(t => [...t, newTask])
            setNewTask("")
        }



    }
    function deleteTask(index){
        const request = new XMLHttpRequest();
        const credentialsJSON = {"delete": index};
        const updatedTasks = tasks.filter((_,i)=> i !== index)
        setTasks(updatedTasks);

        request.open("POST", "http://localhost/s24semesterproject-brighterspace/PHPBackEnd/taskManger.php");
        update_messages(request, credentialsJSON)


    }
    function moveTaskUp(index){
        if(index>0){
            const request = new XMLHttpRequest();
            const credentialsJSON = {"addPriority": index};
            request.open("POST", "http://localhost/s24semesterproject-brighterspace/PHPBackEnd/taskManger.php");

            const updatedTasks = [...tasks];

            update_messages(request, credentialsJSON);
            [updatedTasks[index],updatedTasks[index-1]] = [updatedTasks[index-1],updatedTasks[index]]
            setTasks(updatedTasks)
        }

    }
    function moveTaskDown(index){
        if(index<tasks.length-1){
            const request = new XMLHttpRequest();
            const credentialsJSON = {"subPriority": index};
            request.open("POST", "http://localhost/s24semesterproject-brighterspace/PHPBackEnd/taskManger.php");
            const updatedTasks = [...tasks];
            update_messages(request,credentialsJSON);
            [updatedTasks[index],updatedTasks[index+1]] = [updatedTasks[index+1],updatedTasks[index]]
            setTasks(updatedTasks)

        }
    }

    return(
        <div className="background-taskmanager_container">
        <div className="manager">
            <div className="manager_header">
            <h1>Current Tasks</h1>
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Enter a task.."
                    value={newTask}
                    onChange={handleInputChange}
                    className="enter_a_task"
                />
                <button
                    className="addbutton"
                    onClick={addTask}
                >
                    <FaIcons.FaPlusCircle></FaIcons.FaPlusCircle>
                    Add
                </button>
            </div>
            <div className="tasks_container">
            <ol>
                {tasks.map((task, index) =>
                    <li key={index} className="listed_elements">
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

        </div>
        </div>
    )

}


export default TaskManager