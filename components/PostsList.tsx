import styled from 'styled-components';
import { useRouter } from 'next/router';
import PostModel from '../models/PostModel';

const List = styled.ul`
  margin-top: 5vh;
  padding: 0;
  list-style-type: none;
`;

const ListItem = styled.li`
  width: 80%;
  height: 3em;

  padding: 20px;
  margin: auto;
  margin-top: 2vh;

  border: 5px solid #cce6ff;
  border-radius: 10px;

  font-size: 17px;
  box-shadow: 7px 7px 5px #cce6ff;
  cursor: pointer;

  &:hover {
    border: 5px solid #80bfff;
    box-shadow: 7px 7px 5px #80bfff;
  }
`;

const Title = styled.h4`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Text = styled.p`
  margin:0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;


export default function PostsList({posts}: {posts: Array<PostModel>}) {

  const router = useRouter();

  const handleClick = (postId: number): void => {
    router.push(`/posts/${postId}`);
  }

  return (
    <List>
        {
          posts.map((post) => (
            <ListItem key={post.id} onClick={() => handleClick(post.id)}>
              <Title>{post.title}</Title>
              <Text>{post.body}</Text>
            </ListItem>
          ))
        }
      </List>
  );
}