// ... (imports and other code remains unchanged)
import React, { useState } from 'react';
const Comments = () => {
    // State for managing comments
    const [comments, setComments] = useState([
      { id: 1, user: 'User1', comment: 'Great products!' },
      { id: 2, user: 'User2', comment: 'Great products!' },
      { id: 3, user: 'User3', comment: 'Great products!' },
      { id: 4, user: 'User4', comment: 'Great products!' },
      // Add more comments as needed
    ]);
  
    // State for the new comment
    const [newComment, setNewComment] = useState('');
  
    // Function to add a new comment
    const addComment = () => {
      if (newComment.trim() !== '') {
        const updatedComments = [...comments, { id: comments.length + 1, user: 'Shopkeeper', comment: newComment }];
        setComments(updatedComments);
        setNewComment('');
      }
    };
  
    return (
    
    <div className="comments-section">
          <h2>Customer Comments</h2>
          <div className='commmentscontent'>
          <ul>
          {comments.map((comment) => (
            <li key={comment.id} className={comment.user === 'Shopkeeper' ? 'shopkeeper-comment' : ''}>
              <strong>{comment.user}:</strong> {comment.comment}
            </li>
          ))}
        </ul>
        {/* New comment form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addComment();
          }}
        >
          <textarea
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button type="submit">Add Comment</button>
        </form>
          </div>
        </div>
    
    );
  };
  
  export default Comments;
  