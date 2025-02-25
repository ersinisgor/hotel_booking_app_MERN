import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() => console.log("Connected to MongoDB"));

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/test", async (req: Request, res: Response) => {
  res.json({ message: "Hello from Express" });
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server running on port: ${port}`);
});
