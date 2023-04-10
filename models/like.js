import mongoose from "mongoose";

const likeSchema = new mongoose.Schema(
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
	},
	{ timestamps: true, versionKey: false }
);

const Like = mongoose.model("Like", likeSchema);

export default Like;
