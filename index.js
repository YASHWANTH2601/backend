import express from "express";
import connectDb from "./config/db.js";
const app = express();
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import auth from "./routes/auth.js";
import contact from "./routes/contact.js";
app.use(express.json());
app.use(morgan("tiny"));
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello world");
});
// routes
app.use("/api", auth);
app.use("/api", contact);

const PORT = process.env.PORT || 4000;
const connectFirst = async () => {
  try {
    await connectDb();
    app.listen(PORT, () => {
      console.log(`server is running ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

connectFirst();
