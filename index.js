import "dotenv/config";
import express from "express";
import session from "express-session";
import dbCon from "./db.js";
import apiRouter from "./routes/api.js";

const PORT = process.env.PORT || 8000;
const PROTOCOL = process.env.PROTOCOL || "http";
const HOST = process.env.HOST || "localhost";

const app = express();

// mongodb connection
dbCon();

app.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: false,
		cookie: {
			maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
			secure: false,
		},
	})
);

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api", apiRouter);

app.listen(PORT, HOST, () => {
	console.log(`server is listnening at : ${PROTOCOL}://${HOST}:${PORT}`);
});
