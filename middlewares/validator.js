import { authenticationJoiSchema } from "../helpers/validation.js";

export const authenticateDataMiddleware = (req, res, next) => {
	const validateResult = authenticationJoiSchema.validate(req.body);
	if (validateResult.error) {
		return res.send({
			status: "error",
			message: validateResult.error.message,
		});
	}
	next();
};

export const authenticateUser = async (req, res, next) => {
	const token = req.headers.Authorization;
	const user = await getUser(req.body);
	if (!user) {
		req.user = user;
		return next();
	} else {
		return res.status(403).json({
			status: "error",
			message: "You are not logged in",
		});
	}
};
