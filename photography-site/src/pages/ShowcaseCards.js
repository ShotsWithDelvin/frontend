import { React, useState, useContext, useRef} from "react";
import { AiFillHeart } from "react-icons/ai";
import { IoMdCloseCircle } from "react-icons/io";
import { BiCommentDetail } from "react-icons/bi";
import { UserContext } from "../context/userContext";
import './ShowcaseCards.css';


function ShowcaseCards({id, img}) {
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [newComment, setNewComment] = useState('')
  const commentInputRef = useRef()

  const { showOverlay, setShowOverlay } = useContext(UserContext)

  const fetchComments = async () => {
    try {
        const result = await fetch(`http://localhost:3001/comments/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      });
      const json = await result.json()
      console.log(json)
      setComments(json)
    } catch(e) {

    }
  }

  const addComment = async () => {
    try {
        const result = await fetch(`http://localhost:3001/comments/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          commentary: newComment,
          photos_id: id,
          users_id: 1,
        })
      });
      const json = await result.json()
      setComments([...comments, json])
    } catch(e) {

    }
  }

  const deleteComment = async (commentId) => {
    console.log(commentId)
    try {
      const result = await fetch(`http://localhost:3001/comments`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        photos_id: id,
        id: commentId,
      })
    });
    const json = await result.json()
    setComments(json)
  } catch(e) {

  }
  }

  const onChange = (e) => {
    setNewComment(e.target.value)
  }

  const handleClick = () => {
   fetchComments()
   setShowModal(!showModal)
   setShowOverlay(!showOverlay)
  }

  const handleComment =  async (e) => {
    await addComment()
    commentInputRef.current.value = ''
  }

  return (
    <div className="image-component">
      
      <div className="text-white w-24 flex flex-col-3 gap-3 px-5 py-3">
            <AiFillHeart
              onClick={() => {
                setLikes((likes) => likes + 1);
              }}
              className="like-button"
            />
            <BiCommentDetail onClick={() => setOpen(!open)}
            />
          </div>


        {showModal && (
        <div className="image-modal">
            <div className="text-white" onClick={handleClick}>
                <IoMdCloseCircle size={40}/>
            </div>
            <img className="rounded-md card-img" src={img} alt="oh no"/>
            <div className="comments-container">
              <div className="comments">
                {comments.map((comment, index) => (
                    <div key={index} className="flex flex-col-2 py-2 px-2 gap-2 font-third">
                      <h4 className="text-white">{comment.username}:</h4>
                      <p className="text-white">{comment.commentary}</p>
                      <button onClick={() => deleteComment(comment.id)}>Delete</button>
                        
                    </div>
                ))}
              </div>
                 <div className="write-comment-section">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleComment(e.target[0].value);
          }}
        >
          <div className="comment-bar">
            <input
              ref={commentInputRef}
              autoComplete="off"
              type="text"
              className="comment-text"
              name="search"
              onChange={onChange}
              size="35"
              placeholder="Enter Comment..."
              required
              id="commentPost"
            />
            {/* <button className="submit-comment-button">✩Post Comment✩</button> */}
          </div>
        </form>
      </div>
            </div>

        </div>
        )}
      <div className="image-wrapper" >
        <img className="rounded-md " onClick={handleClick} src={img} alt="oh no!" />
      </div>
    </div>
  );
}

export default ShowcaseCards;
