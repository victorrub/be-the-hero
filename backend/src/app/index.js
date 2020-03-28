import express from "express";
import cors from "cors";
import { errors } from "celebrate";
import routes from "../routes";

class App {
  constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
    this.validators();
  }

  middlewares() {
    this.express.use(cors());
    this.express.use(express.json());
  }

  routes() {
    this.express.use(routes);
  }

  validators() {
    this.express.use(errors());
  }
}

const app = new App().express;
export default app;
