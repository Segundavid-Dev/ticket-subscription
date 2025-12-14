import app from "./app.js";
import config from "./config/index.js";
import connectDB from "./database/mongodb.js";

const startServer = async () => {
  try {
    await connectDB();
    app.listen(config.PORT, () => {
      console.log("server running...");
    });
  } catch (err) {
    console.log(err);
  }
};

startServer();
