import "../styles/Comment.css"

const Comment = ({ comments }) => {
    return(
        <div>
            <div className="comment-container">
                <h3>{comments.text}</h3>
                <div>
                    <button>Reply</button>
                    <button>Delete</button>
                </div>
            </div>
            <div>
                {comments?.replies?.map((ele)=> (
                    <Comment key={comments.id} comments={ele}/>
                ))}
            </div>
        </div>
    );
}

export default Comment