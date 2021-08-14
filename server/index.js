import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/posts.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes);

const CONNCETION_URL =
  process.env.CONNCETION_URL ||
  "mongodb+srv://YoussefWilliam:YoussefWilliam123@memory-mern.epgnx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNCETION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(` 🚀 Server running on port ${PORT} 🚀 `))
  )
  .catch((err) => console.log(err.message));

// To prevent warning errors
mongoose.set("useFindAndModify", false);
