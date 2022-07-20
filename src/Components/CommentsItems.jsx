import React, {useState} from 'react';
import FormComment from "./FormComment";
import Api from "../api";

const CommentsItems = ({comment, setToggle, back}) => {
    const [active, isActive] = useState(false);
    const [parentId, setParentId] = useState(null);
    const nested = back.filter(bk => bk.parentID === comment.id);
    const replies = (nested || []).map(rep => {
        return <CommentsItems key={rep.id} back={back} comment={rep} setToggle={setToggle}/>
    })
    const handleDelete = (id) => {
        Api.delete(id);
        setToggle(true)
    }
    const handleAdd = (id) => {
        isActive(true);
        setParentId(id);
    }
    return (
        <div style={{marginLeft: "40px"}}>
            <div className='comment'>
                <div className='item'>
                    <h3>Author: {comment.author}</h3>
                    <p>{comment.comment}</p>
                </div>
                <div className='holder'>
                    <button onClick={() => handleAdd(comment.id)}>Comment</button>
                    <button onClick={() => handleDelete(comment.id)}>Delete</button>
                </div>
            </div>
            {replies}
            {active && <FormComment setToggle={setToggle} parentId = {parentId} setParentId = {setParentId} isActive = {isActive}/>}
        </div>
    );
};

export default CommentsItems;