require("dotenv").config();
const express = require("express");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/api/data", async (req, res) => {
  try {
    const response = await axios.post(
      "https://us-east-2.aws.data.mongodb-api.com/app/data-usztf/endpoint/data/v1/action/findOne",
      {
        collection: "YourCollectionName",
        database: "YourDatabaseName",
        dataSource: "HackWashU2024",
        projection: { _id: 1 },
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Request-Headers": "*",
          "api-key": process.env.MONGODB_API_KEY,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
