import React, {useState} from 'react'
import Comment from "../components/Comment"
import {CommentData} from "../components/CommentData"
import "../styles/DiscussionBoard.css"



export default function DiscussionBoard(){
    const [comments, setComments] = useState(CommentData);
    return(
        <div className="comment-app">
            <Comment comments={comments}/>
        </div>
    );
}
