import { Router } from "express";

const authRouter = Router();

authRouter.post("/signup", (req, res) => {
  res.send({ message: "Sign up" });
});

authRouter.post("/signin", (req, res) => {
  res.send({ message: "Sign in" });
});

export default authRouter;
