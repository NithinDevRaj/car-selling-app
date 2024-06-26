import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import listingRouter from "./routes/listing.route.js";
import adminRouter from "./routes/admin.route.js";
import error from "./middlewares/error.middleware.js";
import cookieParser from "cookie-parser";
import path from "path";
import cors from "cors";
dotenv.config();

const __dirname = path.resolve();
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(cookieParser());

//connecting to DB
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });
// enabling CORS for some specific origins only.
let corsOptions = {
  origin: ["*"],
};
app.use(cors(corsOptions));
//initialize server
app.listen(port, () => {
  console.log("server is running");
});
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/listing", listingRouter);
app.use("/api/admin", adminRouter);

app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

// configuring error middleware
app.use(error);
