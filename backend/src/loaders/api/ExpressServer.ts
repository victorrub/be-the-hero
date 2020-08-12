import { errors } from "celebrate";
import cors from "cors";
import express from "express";

export class ExpressServer {
  public readonly express = express();

  constructor(private readonly _router: express.Router) {
    this.SubscribeMiddleware();
    this.SubscribeRoutes();
    this.SubscribeValidators();
  }

  private SubscribeMiddleware(): void {
    this.express.use(cors());
    this.express.use(express.json());
  }

  private SubscribeRoutes(): void {
    this.express.use(this._router);
  }

  private SubscribeValidators(): void {
    this.express.use(errors());
  }
}
