import User from "../models/user.js";
import { getUser } from "../services/api.js";
import jwt from "jsonwebtoken";

export const authenticate = async (req, res) => {
	const user = await getUser(req.body);
	// await User.create({
	// 	username: "happy",
	// 	email: "happy@gmail.com",
	// 	password: "d12345678",
	// });
	if (user) {
		console.log(user);
		var token = jwt.sign(
			{
				data: user.email,
			},
			process.env.JWT_SECRET
		);
		return res.send({
			status: "success",
			token: token,
		});
	} else {
		return res.send({
			status: "error",
			message: "email or password is wrong.",
		});
	}
};
