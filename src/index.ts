import express from "express";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 3000;

app.get("/test-route", (req, res) => {
  res.status(200).json({
    message: "GET Request successful on the test route",
  });
});

app.listen(port, () => {
  console.log(`Server is now running on port: ${port}`);
});
