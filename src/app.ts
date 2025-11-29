import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes/index";
import { errorMiddleare } from "./middlewares/error.middleware";

dotenv.config();

export const createApp = (): Application => {

    const app = express();
    const options = {
        origin: "*",
        methods: ["POST", "GET", "DELETE", "PUT"]
    }
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    app.use(cors(options));

    app.use('/api', routes );
    app.use( errorMiddleare );

    return app;    
}