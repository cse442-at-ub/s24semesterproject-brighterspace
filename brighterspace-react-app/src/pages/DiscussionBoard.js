import React, {useState} from 'react'
import "../csspages/Discussion.css"
import styled from 'styled-components'
import { createGlobalStyle} from "styled-components";


const DiscussionBoard = () => {
    return(
        <body>
        <ol>
            <li className="row">
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

            </li>
            <li className="row">
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

            </li>

        </ol>

        </body>
    )
}

export default DiscussionBoard