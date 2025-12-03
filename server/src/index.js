import app from "./app.js";
import config from "./config/index.js";

const startServer = async () => {
  try {
    app.listen(config.port, () => {
      console.log("server running...");
    });
  } catch (err) {
    console.log(err);
  }
};

startServer();
