import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		isActive: {
			type: Boolean,
			default: true,
		},
		followers: [
			{
				type: mongoose.ObjectId,
				ref: "User",
				required: true,
			},
		],
		following: [
			{
				type: mongoose.ObjectId,
				ref: "User",
				required: true,
			},
		],
	},
	{ timestamps: true, versionKey: false }
);

const User = mongoose.model("User", userSchema);

export default User;
