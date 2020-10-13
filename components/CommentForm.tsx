import axios from 'axios';
import { FormEvent, useState } from "react";
import Router from 'next/router'
import styled from 'styled-components';

const Form = styled.form`
	display: flex;
	flex-direction: column;
`;

const Textarea = styled.textarea`
  padding: 5px;
  border-radius: 5px;
  border: 2px solid #404040;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  color: #404040;
  outline: none;
  resize: none;
`;

const CommentBtn = styled.button`
  width: 10em;
  padding: 5px;
  margin-top: 1vh;
  border-radius: 5px;
  border: 2px solid dodgerblue;
  color: dodgerblue;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
		background-color: dodgerblue;
    color: white;
	}
`;

export default function CommentForm({ postId }: { postId: number }) {

  const [comment, setComment] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if(comment == "")
      return;

    setComment("");

    axios.post('https://simple-blog-api.crew.red/comments', {
      postId: postId,
      body: comment
    })
      .then(() => Router.reload())
      .catch(console.error);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Textarea rows={2} value={comment} onChange={(event) => setComment(event.target.value)}></Textarea>
      <CommentBtn type="submit">Comment</CommentBtn>
    </Form>
  )
}