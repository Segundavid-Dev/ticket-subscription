import dotenv from "dotenv";
// import process from "process";

dotenv.config();

// validate required envs
if (!process.env.PORT) {
  throw new Error("Missing port in env");
}

export default {
  port: process.env.PORT,
  nodeEnv: process.env.NODE_ENV || "development",
};
