import axios from 'axios';
import styled from 'styled-components';
import { FormEvent, useState } from "react";
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

const Title = styled.h2`
	font-size: 1.5em;
	margin: 30px 0 10px 0;
	text-align: center;
	color: #4da6ff;
`;

const Form = styled.form`
	display: flex;
	align-items: stretch;
	flex-direction: column;
	width: 50%;
	margin: auto;
`;

const Label = styled.label`
	margin-top: 3vh;
	font-size: 16px;
`;

const Input = styled.input`
	padding: 5px;
	border-radius: 5px;
  border: 2px solid black;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  outline: none;
`;

const Textarea = styled.textarea`
  padding: 5px;
  border-radius: 5px;
  border: 2px solid black;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  outline: none;
  resize: none;
`;

const CreateBtn = styled.button`
	width: 15em;
	margin: auto;
	padding: 10px;
	margin-top: 5vh;
	border-radius: 5px;
	border: 2px solid black;
  color: white;
	background-color: dodgerblue;
  font-size: 16px;
	font-weight: bold;
	cursor: pointer;
`;

export default function newPost() {

	const router = useRouter();
	const [title, setTitle] = useState("");
	const [text, setText] = useState("");

	const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
		event.preventDefault();

		if(title == "" || text == "") 
			return;

		axios.post('https://simple-blog-api.crew.red/posts', {
			title: title,
			body: text
		})
			.then((response) => router.push(`/posts/${response.data.id}`))
			.catch(console.error);
	}

	return (
		<Layout siteTitle="New post">
			<div>
				<Title>Create post</Title>

				<Form onSubmit={handleSubmit}>
					<Label>Title:</Label>
					<Input value={title} onChange={(event) => setTitle(event.target.value)}/>

					<Label>Text:</Label>
					<Textarea rows={10} value={text} onChange={(event) => setText(event.target.value)}></Textarea>

					<CreateBtn type="submit">Create</CreateBtn>
				</Form>
			</div>
		</Layout>
	);
}