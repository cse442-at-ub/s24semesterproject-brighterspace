import "./Comment.css"
import { useState } from "react"

const Comment = ({ comments, handleAddComments, handleDeleteComments }) => {
    const [showInput,setShowInput]  = useState(false)
    const [commentBody,setCommentBody] = useState("")

    const handleAdd = () => {
        let newComments = {
            id:Date.now(),
            text:commentBody,
            replies: [],

        }
        handleAddComments(comments.id,newComments)
        setShowInput(false)
    }
    return(
        <div>
        <div className="entire-container">
            <div className="comment-container">
                <h3>{comments.text}</h3>
                {showInput && <input
                    type="text"
                    autoFocus
                    onChange={(e)=>setCommentBody(e.target.value)}
                />}
                {
                    showInput? (
                        <div>
                            <button onClick={handleAdd}>Add</button>
                            <button onClick={()=>setShowInput(false)}>Cancel</button>
                        </div>
                    ): (
                        <div>
                            <button onClick={() => setShowInput(true)}>Reply</button>
                            <button onClick>Delete</button>
                        </div>
                    )
                }

            </div>
            <div style={{paddingLeft: 25}}>
                {comments?.replies?.map((ele)=> (
                    <Comment
                        key={ele.id}
                        comments={ele}
                        handleAddComments={handleAddComments}
                        handleDeleteComments={handleDeleteComments}
                    />
                ))}
            </div>
        </div>
        </div>
    );
}

export default Comment