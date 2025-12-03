import app from "./app.js";

const startServer = async () => {
  try {
    app.listen(8000, () => {
      console.log("server running...");
    });
  } catch (err) {
    console.log(err);
  }
};

startServer();
