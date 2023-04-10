import User from "../models/user.js";

export const getUser = async (data) => {
	const { email, password } = data;
	if (password) {
		var user = await User.findOne({
			email: email,
			password: password,
			isActive: true,
		});
	} else {
		var user = await User.findOne({
			email: email,
			isActive: true,
		});
	}
	return user;
};
