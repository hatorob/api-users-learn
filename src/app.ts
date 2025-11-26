import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes/index";

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

    return app;    
}