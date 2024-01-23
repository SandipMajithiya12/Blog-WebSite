import { useState } from "react";
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [title,setTitle] = useState('');
    const [body,setBody]= useState('');
    const [author,setAutor] = useState('');
    const [isPending,setIsPending] = useState(false);
    const history = useHistory();


    const handleSubmit = (e) =>
    {
        e.preventDefault();
        const blog = {title,body,author};
       setIsPending(true);
       console.log("yes");
  
    fetch('http://localhost:8000/blogs',
    {
        method:'POST',
        headers :{"content-Type" :"application/json" },
        body : JSON.stringify(blog)

    }).then(()=>
    {
        console.log('new blog added');
        setIsPending(false);
        history.push('/');
    }
    );
}
    return (  
<div className="create">
    <h2>Add a new blog</h2>
    <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input type="text" required
        value={title}
        onChange={(e) =>setTitle(e.target.value)}
        
        ></input>
        <label>
            Blog Body:
        </label>
        <textarea required 
        value = {body}
        onChange={(e) => setBody(e.target.value)}

        ></textarea>
        <label>
            Blog Author:
        </label>
        <select
        value={author}
        onChange={(e) => setAutor(e.target.value)}
        >
            <option value="sandip">sandip</option>
            <option value="krutik">krutik</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending &&  <button disabled>Adding Blog...</button>}
        

    </form>
</div>
 );
}
 
export default Create;