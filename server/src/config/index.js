import dotenv from "dotenv";
// import process from "process";

dotenv.config();

// validate required envs
if (!process.env.PORT) {
  throw new Error("Missing port in env");
}

export default {
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV || "development",
  DB_URI: process.env.DATABASE_URI,
};
