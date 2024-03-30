import React, {useState} from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'
import * as Fa6 from "react-icons/fa6";

function TaskManager(){
    const[tasks,setTasks] = useState(["DO MTH101 HW","DO CSE442 TASK"]);
    const[newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value)

    }

    function addTask(){

    }
    function deleteTask(index){

    }
    function moveTaskUp(index){

    }
    function moveTaskDown(index){

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