import mongoose from "mongoose";

const followSchema = new mongoose.Schema(
	{
		followee: {
			type: mongoose.ObjectId,
			ref: "User",
			required: true,
		},
		follower: {
			type: mongoose.ObjectId,
			ref: "User",
			required: true,
		},
	},
	{ timestamps: true, versionKey: false }
);

const Follow = mongoose.model("Follow", followSchema);

export default Follow;
