import {FormEvent, useState} from "react";
import {useRouter}  from 'next/router';
import axios from 'axios';

export default function newPost() {

    const router = useRouter()
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        
        axios.post('https://simple-blog-api.crew.red/posts', {
            title: title,
            body: text
        })
            .then((response) => router.push(`/posts/${response.data.id}`))
            .catch(console.error);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input name="title" value={title} onChange={(event) => setTitle(event.target.value)}/>
                </label>

                <label>
                    Text:
                    <textarea name="body" value={text} onChange={(event) => setText(event.target.value)}>
                    </textarea>
                </label>

                <button type="submit">Create</button>
            </form>
        </div>
    );
}