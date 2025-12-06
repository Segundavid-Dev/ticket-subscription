import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.post("/", (req, res) => {
  res.send({ title: "CREATE new subscription" });
});

subscriptionRouter.get("/", (req, res) => {
  res.send({ title: "GET all subscriptions" });
});

export default subscriptionRouter;
