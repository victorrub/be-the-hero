import { Express } from "express";
import supertest from "supertest";

import {
  ExpressServerSetup,
  CloseConnection,
} from "../utils/ExpressServerSetup";

describe("API => Check the service status", () => {
  let express: Express;

  beforeAll(async () => {
    express = await ExpressServerSetup();
  });

  afterAll(async () => {
    await CloseConnection();
  });

  it("should connect at the server and return status 200 when request to default route", async () => {
    const { status } = await supertest(express).get("/");

    expect(status).toBe(200);
  });

  it("should request to default route and get the application status", async () => {
    const { body } = await supertest(express).get("/");

    expect(body).toHaveProperty("service", "be-the-hero_backend");
    expect(body).toHaveProperty("status", "running");
    expect(body).toHaveProperty("checkAt");
  });
});
