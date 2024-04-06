import React, {useState} from 'react'
import '../styles/SupportPage.css'

const SupportPage = () => {
    const [support,setSupport] = useState("");
    const [tickets, setTickets] = useState([]);

    const onClickHandler = () => {
        setTickets((tickets) => [[...tickets,support]])
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
            <h3 className="support_text">Submit your support ticket</h3>
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
