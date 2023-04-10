import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
	{
		user: {
			type: mongoose.ObjectId,
			ref: "User",
			required: true,
		},
		post: {
			type: mongoose.ObjectId,
			ref: "Post",
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true, versionKey: false }
);

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;
