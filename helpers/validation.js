import Joi from "joi";

export const authenticationJoiSchema = Joi.object(
	{
		email: Joi.string().email().required(),
		password: Joi.string().min(8).max(30).required(),
	},
	{
		abortEarly: false,
		stripUnknown: true,
	}
);
