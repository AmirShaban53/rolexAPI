import Express from "express";
import cors from "cors";
import logger from "./middleware/logger";

//import routes
import Menu from "./routes/menu";
import User from "./routes/user";
import Order from "./routes/order";
import Auth from "./routes/auth";

const PORT = process.env.PORT || 5000;

const app = Express();

app.use(Express.json());
app.use(cors());

app.get("/", (req, res) => {
  return res.status(200).json({ message: "hello and welcome to this api" });
});

app.use("/menu", Menu);
app.use("/auth", Auth);
app.use("/users", User);
app.use("/order", Order);

app.listen(PORT, () => {
  logger.info(`server running on port: http://localhost:${PORT}`);
});
