import React, {useState} from 'react'
import Comment from "../../components/Comments/Comment"
import {CommentData} from "../../components/Comments/CommentData"
import "./DiscussionBoard.css"
import useFunctions from "../../components/UseFunctions"



export default function DiscussionBoard(){
    const [comments, setComments] = useState(CommentData);
    const { addComment,deleteComment } = useFunctions()
    const handleAddComments = (commentId,comment) => {
        const updatedTree = addComment(comments,commentId,comment)
        setComments(updatedTree)

    }
    const handleDeleteComments = (commentId) => {
        const updatedTree = deleteComment(comments, commentId)
        setComments(updatedTree)
    }
    return(
        <div className="comment-app">
            <Comment
                key={comments.id}
                comments={comments}
                handleAddComments={handleAddComments}
                handleDeleteComments={handleDeleteComments}
            />
        </div>
    );
}
