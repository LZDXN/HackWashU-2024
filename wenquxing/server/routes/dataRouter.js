const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/data", async (req, res) => {
  try {
    const response = await axios.post(
      "https://us-east-2.aws.data.mongodb-api.com/app/data-usztf/endpoint/data/v1/action/findOne",
      {
        collection: "YOUR_COLLECTION_NAME",
        database: "YOUR_DATABASE_NAME",
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

module.exports = router;
