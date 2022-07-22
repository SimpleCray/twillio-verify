import express from "express";
import routes from "./services/routes";
import cors from "cors";
import bodyParser from "body-parser";
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;
const HOST = process.env.HOST;
var corsOptions = {
    origin: [
        "http://localhost:3000",
    ],
};
app.use(cors(corsOptions));
app.listen(PORT, HOST, () => {
    console.log(`🚀 Server started on Host: http://${HOST}:${PORT}/.`);
});
app.use("/", routes);
