import Express from "express";
import cors from "cors";
// import logger from "./middleware/logger";

//import routes
import Menu from "./routes/menu";

const PORT = process.env.PORT || 5000;

const app = Express();

app.use(Express.json());
app.use(cors());

app.get("/", (req, res) => {
  return res.status(200).json({ message: "hello and welcome to this api" });
});

// app.use("/menu", MenuRoute);

app.listen(PORT, () => {
  console.log(`server running on port: http://localhost:${PORT}`);
});
