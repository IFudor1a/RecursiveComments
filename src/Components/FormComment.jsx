import React, {useState} from 'react';
import Api from "../api";

const FormComment = ({setToggle, parentId, isActive}) => {
    const [author, setAuthor] = useState('');
    const [comment, setComment] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        Api.add(author,comment,parentId);
        setComment('');
        setAuthor('');
        setToggle(true);
        isActive(false);
    }
    return (
        <div className='form'>
            <h2>Add Comment</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>Author</label>
                <input placeholder='enter author' value={author} onChange={e => setAuthor(e.target.value)}/>
                <label>Comment</label>
                <textarea placeholder='enter comment' value={comment} onChange={e => setComment(e.target.value)}/>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default FormComment;