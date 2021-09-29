// import modules
import express from "express";
import helmet from "helmet";
import cors from "cors";
import custom from "custom-env";


// import self made modules
import { mainRoutes } from "./routes";
import log from "./log";

// instances
const app = express();
custom.env(true);

// globals
global.logger = log;
global.port = process.env.APP_PORT;

// app config
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(helmet());
app.disable("x-powered-by");
app.use(cors());

// app config self modules
app.use("/main",mainRoutes);

export { app };