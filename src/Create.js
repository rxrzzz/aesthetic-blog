import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('')
    const [pending, setPending] = useState(false);
    return ( 
        <section>
            <form>
                
            </form>
        </section>
     );
}
 
export default Create;
