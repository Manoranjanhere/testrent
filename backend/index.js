// app.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./error/error.js";
import loginRouter from "./routes/loginRoute.js";
import registerRouter from "./routes/registerRoute.js"; 
import contactRoute from "./routes/contactRoute.js";
import path from "path";
import { fileURLToPath } from "url";
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(cors({ credentials: true, origin: true }));
dotenv.config({ path: "./config/config.env" });

app.use(express.static(path.join(__dirname, "./build")));

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/login", loginRouter);
app.use("/api/v1/register", registerRouter);
app.use("/api/v1/contact", contactRoute);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './build/index.html'));
});


dbConnection();
app.use(errorMiddleware);

app.listen(process.env.PORT, ()=>{
  console.log(`SERVER HAS STARTED AT PORT ${process.env.PORT}`);
})
