import axios from 'axios';
import {FormEvent, useState} from "react";
import Head from 'next/head'
import Router from 'next/router'

interface CommentModel {
    postId: number,
    body: string
}

interface PostModel {
    id: number,
    title: string,
    body: string,
    comments: Array<CommentModel>
}

export default function Post({ post }: {post: PostModel}) {

    const [comment, setComment] = useState("");

    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        axios.post('https://simple-blog-api.crew.red/comments', {
            postId: post.id,
            body: comment
        })
            .then(() => Router.reload()) //window.location.pathname
            .catch(console.error);
    }

    return (

        <div>
            <Head>
                <title>{`Post #${post.id}`}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div>
                <h3>{post.title}</h3>
                <p>{post.body}</p>

                <div>
                    <form onSubmit={handleSubmit}>
                        <textarea name="comment" value={comment} onChange={(event) => setComment(event.target.value)}></textarea>
                        <button type="submit">Comment</button>
                    </form>
                </div>

                <ul>
                    {
                        post.comments?.map(comment => (
                            <li>
                                <span>Anonymus: </span>
                                <p>{comment.body}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}