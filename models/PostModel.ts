import CommentModel from './CommentModel';

export default interface PostModel {
	id: number,
	title: string,
	body: string,
	comments: Array<CommentModel>
}