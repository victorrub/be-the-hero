import express from "express";

const routes = express.Router();

routes.get("/", (request, response) => {
  return response.json({
    event: "Semana OmniStack 11.0",
    alive: new Date()
  });
});

export default routes;
