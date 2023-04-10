import mongoose from "mongoose";

const db = async () => {
	mongoose
		.connect("mongodb://127.0.0.1:27017/reunion")
		.then(() => {
			console.log("Database Connected Successfully...");
		})
		.catch((err) => {
			console.log(err);
		});
};

export default db;
