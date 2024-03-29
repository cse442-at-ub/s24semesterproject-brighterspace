import React from 'react'
import "../csspages/Discussion.css"

const DiscussionThread = () =>{
    return (
        <body>
        <div className="top-bar">
            <h1>
                My Forum
            </h1>
        </div>
        <div className="header">
            <h4 className="title">
                Thread 1

            </h4>
            <div className="bottom">
                <p className="timestamp">
                    10/10/2024

                </p>
                <p className="comment-count">
                    4 comments

                </p>
            </div>

        </div>
        </body>


    )
}

export default DiscussionThread