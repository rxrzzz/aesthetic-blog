import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";


const Create = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [body, setBody] = useState('');
    const [isPending, setPending] = useState(false)
    const history = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        const blog = {title, author, body}

        setPending(true);
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        }).then(() => {
            setPending(false);
            history('/')
        })
        
    }
    return ( 
        <div>
            <h2>Create A Blog</h2>
            <form onSubmit={handleClick}>
                <label>Title</label>
                <input type="text" required value={title} onChange={((e) => setTitle(e.target.value))} />

                <label>Author</label>
                <input type="text" required value={author} onChange={((e) => setAuthor(e.target.value))} />

                <label>Body</label>
                <textarea type="text" required value={body} onChange={((e) => setBody(e.target.value))} />

                {!isPending && (<button>Add Blog</button>)}
                {isPending && (<button>Adding Blog...</button>)}
            </form>
        </div>
     );
}
 
export default Create;