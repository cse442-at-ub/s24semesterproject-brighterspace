import React, {useEffect, useState} from 'react'
import '../styles/SupportPage.css'

const SupportPage = () => {
    const [support,setSupport] = useState("");
    const [tickets, setTickets] = useState([]);



    const update_task = () => {
        const request = new XMLHttpRequest();
        // todo when change link on server
        request.open("POST", "http://localhost/s24semesterproject-brighterspace/PHPBackEnd/supportPage.php");
        const credentialsJSON = {"Update": "Update"};
        request.send(JSON.stringify(credentialsJSON));

        request.onload = () => {
            if (request.readyState === XMLHttpRequest.DONE) {
                if (request.status === 200) {
                    const responseText = request.responseText;
                    console.log(responseText);
                    setTickets((tickets) => [[[],responseText]])


                }
                else if (request.status === 404){
                    console.log("Something went horribly wrong")
                }
            }
        }
    }


    useEffect(() => {
        // Call the function when the component mounts
        update_task();
    }, []);

    const onClickHandler = () => {
        const request = new XMLHttpRequest();
        // todo when change link on server
        request.open("POST", "http://localhost/s24semesterproject-brighterspace/PHPBackEnd/supportPage.php");
        const credentialsJSON = {"Ticket": support};
        request.send(JSON.stringify(credentialsJSON));

        request.onload = () => {
            if (request.readyState === XMLHttpRequest.DONE) {
                if (request.status === 200) {
                    const responseText = request.responseText;
                    console.log(responseText);
                    setTickets((tickets) => [[[],responseText]])

                }
                else if (request.status === 404){
                    console.log("Something went horribly wrong")
                }
            }
        }


    }


    const onChangeHandler = (e) => {
        setSupport(e.target.value)

    };
    return (
        <div className="main_container">
            {tickets.map((text)=> (
                <div className="support_container">Your Current Ticket: {text}</div>
            ))}
            <div className="support_box">
            <h3 className="support_text">Submit your support ticket Only 1 Ticket</h3>
            <textarea
                value={support}
                onChange={onChangeHandler}
                className="input_box"/>
            <button onClick={onClickHandler} className="ticket_button">Submit Ticket</button>
            </div>
        </div>
    )
}
export default SupportPage
