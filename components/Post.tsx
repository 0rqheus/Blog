import styled from 'styled-components';
import PostModel from '../models/PostModel';
import CommentForm from './CommentForm';
import CommentsList from './CommentList';

const PostContainer = styled.div`
	width: 60%;
	margin: auto;
`;

const PostContent = styled.div`
	margin-bottom: 3vh;
`;

const Title = styled.h3`
	font-size: 1.5em;
	margin: 30px 0 10px 0;
	text-align: center;
	color: #4da6ff;
`;

const Text = styled.p`
	font-size: 18px;
	line-height: 150%;
	word-wrap: break-word;
  white-space: pre-line;
`;

export default function Post({ post }: { post: PostModel }) {

	return (
		<PostContainer>
			<PostContent>
				<Title>{post.title}</Title>
				<Text>{post.body}</Text>
			</PostContent>

			<div>
				<CommentForm postId={post.id}/>
				<CommentsList comments={post.comments}/>
			</div>

		</PostContainer>

	);
}