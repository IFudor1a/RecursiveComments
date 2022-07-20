import React, {useEffect, useState} from 'react';
import CommentsItems from "./CommentsItems";


const CommentsLabel = ({toggle, setToggle}) => {
    const [back, setBack] = useState(null);
    const root = back && back.filter(bk => bk.parentID === null);

    const handleFetch = () => {
        fetch('http://localhost:5000/api').then(res => res.json()).then(data => setBack(data))
    }

    useEffect(() => {
        handleFetch();
        setToggle(false);
    }, [toggle])
    return (
        <div className='comments'>
            <h2>Comments</h2>
            {root && root.map(comment => (
                <CommentsItems key= {comment.id} back= {back} comment={comment} setToggle={setToggle}/>
            ))}
        </div>
    );
};

export default CommentsLabel;