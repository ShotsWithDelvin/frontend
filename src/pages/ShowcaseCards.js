import React, { useState, useContext, useRef, useEffect } from "react";
import { AiFillHeart } from "react-icons/ai";
import { IoMdCloseCircle } from "react-icons/io";
import { UserContext } from "../context/userContext";
import "./ShowcaseCards.css";
import APIURL from '../apiEndpoint'

function ShowcaseCards({ id, img }) {
  const [comments, setComments] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [likes, setLikes] = useState(0);
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editedCommentText, setEditedCommentText] = useState("");
  const commentInputRef = useRef();
  const editTextRef = useRef();

  const { showOverlay, setShowOverlay, user } = useContext(UserContext);
  const { token } =
    JSON.parse(window.localStorage.getItem("showcase-token")) ?? {};

  function handleEdit(commentId) {
    setEditingCommentId(commentId);
  }

  async function handleSave(event) {
    event.preventDefault();
    try {
      console.log(editedCommentText);
      const result = await fetch(`${APIURL}/comments/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          commentary: editedCommentText,
          comment_id: editingCommentId,
          photos_id: id,
        }),
      });
      const json = await result.json();
      setComments(json);
    } catch (e) {
      console.log(e);
    }

    setEditingCommentId(null);
  }

  //----------------------------------------------//

  const fetchComments = async () => {
    try {
      const result = await fetch(`${APIURL}/comments/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await result.json();
      setComments(json);
    } catch (e) {}
  };

  const addComment = async () => {
    try {
      const result = await fetch(`${APIURL}/comments/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          commentary: newComment,
          photos_id: id,
          users_id: user?.id,
        }),
      });
      const json = await result.json();
      setComments([...comments, json]);
    } catch (e) {
      console.log(e);
    }
  };

  const deleteComment = async (commentId) => {
    try {
      const result = await fetch(`${APIURL}/comments`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          photos_id: id,
          id: commentId,
        }),
      });
      const json = await result.json();
      setComments(json);
    } catch (e) {}
  };

  const onChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleClick = () => {
    fetchComments();
    setShowModal(!showModal);
    setShowOverlay(!showOverlay);
  };

  const handleComment = async (e) => {
    await addComment();
    commentInputRef.current.value = "";
  };

  const onEdit = (e) => {
    setEditedCommentText(e.target.value);
  };
  //-------------------------------------------//

  const fetchLikes = async () => {
    try {
      const result = await fetch(`${APIURL}/likes/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await result.json();
      setLikes(json.count);
    } catch (e) {}
  };

  const addLike = async () => {
    try {
      const result = await fetch(`${APIURL}/likes/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          photos_id: id,
          users_id: user?.id,
        }),
      });
      const json = await result.json();
      setLikes(json.count);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchLikes();
  }, []);

  return (
    <div className="image-component">
      <div className="text-white w-24 flex flex-col-3 gap-3 px-5 py-7"></div>
      <div className="text-[#dc2626] flex flex-col-2 gap-1 ">
        <AiFillHeart onClick={addLike} />
        <div className="text-white">{likes && <h1>{likes}</h1>}</div>
      </div>

      {showModal && (
        <div className="image-modal">
          <div className="text-white" onClick={handleClick}>
            <IoMdCloseCircle size={40} />
          </div>
          <img className="rounded-md card-img" src={img} alt="oh no" />
          <div className="comments-container">
            <div className="comments">
              {comments &&
                comments.map((comment, index) => (
                  <div
                    key={index}
                    className="flex flex-col-2 py-2 px-2 gap-2 font-third"
                  >
                    <h4 className="text-white">{comment.username}:</h4>
                    <p className="text-white">{comment.commentary}</p>
                    {user?.id === comment.users_id && (<div className=" flex flex-col-2 gap-2 bg-gradient-to-r from-gray-600 to-red-600 bg-clip-text hover:text-[#b91c1c] transparent transition font-primary">
                     <button onClick={() => deleteComment(comment.id)}>
                        Delete
                      </button>
                      <div className="bg-gradient-to-r from-gray-600 to-red-600 bg-clip-text text-transparent hover:text-white transition font-primary">
                        <button onClick={() => handleEdit(comment.id)}>
                          Edit
                        </button>
                      </div>
                    </div>)}
                  </div>
                ))}


              {editingCommentId && user && (
                <form onSubmit={handleSave}>
                  <input
                    className="text-black"
                    type="text"
                    ref={editTextRef}
                    onChange={onEdit}
                  />
                  <button className="flex space-x-4" type="submit">
                    Save
                  </button>
                </form>
              )}
            </div>

            <div className="text-black">
              {user && (
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
                      className="rounded-lg "
                      name="search"
                      onChange={onChange}
                      size="35"
                      placeholder=" Comment..."
                      required
                      id="commentPost"
                    />
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
      <div className="image-wrapper">
        <img
          className="rounded-md "
          onClick={handleClick}
          src={img}
          alt="oh no!"
        />
      </div>
    </div>
  );
}

export default ShowcaseCards;







