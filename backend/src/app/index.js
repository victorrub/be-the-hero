import express from "express";
import cors from "cors";
import routes from "../routes";

class App {
  constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(cors());
    this.express.use(express.json());
  }

  routes() {
    this.express.use(routes);
  }
}

const app = new App().express;
export default app;
