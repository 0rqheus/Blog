import styled from 'styled-components';
import CommentModel from '../models/CommentModel';

const CommentList = styled.ul`
  margin-top: 5vh;
  padding: 0;
  list-style-type: none;
`;

const Comment = styled.li`
  display: flex;
  padding: 15px;
  width: 95%;
  margin: auto;
  margin-top: 1vh;
  border-radius: 10px;
  font-size: 16px;
  color: #595959;
  background-color: #F2F8FF;
`;

const Author = styled.span`
  padding-right: 10px;
  font-weight: bold
`;

const Text = styled.p`
  margin:0;
`;

export default function Comments({ comments }: { comments: Array<CommentModel> }) {
  return (
    <CommentList>
      {
        comments?.map((comment, index) => (
          <Comment key={index}>
            <Author>Anonymus: </Author>
            <Text>{comment.body}</Text>
          </Comment>
        ))
      }
    </CommentList>
  )
}