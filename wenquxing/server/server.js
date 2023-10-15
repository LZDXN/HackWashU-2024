const express = require("express");
const { MongoClient } = require("mongodb");
const Realm = require("realm");
require("dotenv").config();

const app = express();
const PORT = 3000;

const MONGODB_URI = process.env.MONGODB_URI;
const REALM_APP_ID = process.env.REALM_APP_ID;

app.use(express.json());

// Realm Setup
const realmApp = new Realm.App({ id: REALM_APP_ID });
const credentials = Realm.Credentials.anonymous();

// MongoDB Setup
let db;
MongoClient.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then((client) => {
    console.log("Connected to Database");
    db = client.db("wenquxing");
  })
  .catch((error) => console.error(error));

// Basic Authentication Middleware
const basicAuth = (req, res, next) => {
  const authHeader = req.headers.authorization || "";
  const [username, password] = Buffer.from(
    authHeader.split(" ")[1] || "",
    "base64"
  )
    .toString()
    .split(":");
  if (username === "lzdxn" && password === "qwertyuiop[]") {
    return next();
  }
  res.status(401).send("Unauthorized");
};

// API Endpoints
app.get("/files", basicAuth, async (req, res) => {
  try {
    const user = await realmApp.logIn(credentials);
    const filesCollection = db.collection("files");
    const query = req.query.userId ? { user_id: req.query.userId } : {};
    const files = await filesCollection.find(query).toArray();
    res.json(files);
  } catch (err) {
    console.error("Failed to log in", err);
    res.status(500).send(err);
  }
});

app.get("/file/:filename", async (req, res) => {
  try {
    const user = await realmApp.logIn(credentials);
    const filesCollection = db.collection("files");
    const file = await filesCollection.findOne({
      filename: req.params.filename,
    });
    res.json(file);
  } catch (err) {
    console.error("Failed to log in", err);
    res.status(500).send(err);
  }
});

app.put("/file/:filename", async (req, res) => {
  try {
    const user = await realmApp.logIn(credentials);
    const filesCollection = db.collection("files");
    const { body } = req.body;
    await filesCollection.updateOne(
      { filename: req.params.filename },
      { $set: { body } }
    );
    res.status(200).send("File updated successfully");
  } catch (err) {
    console.error("Failed to log in", err);
    res.status(500).send(err);
  }
});

app.post("/file", async (req, res) => {
  try {
    const user = await realmApp.logIn(credentials);
    const filesCollection = db.collection("files");
    const { filename, body, user_id } = req.body;
    await filesCollection.insertOne({ filename, body, user_id });
    res.status(201).send("File created successfully");
  } catch (err) {
    console.error("Failed to log in", err);
    res.status(500).send(err);
  }
});

app.delete("/file/:filename", async (req, res) => {
  try {
    const user = await realmApp.logIn(credentials);
    const filesCollection = db.collection("files");
    await filesCollection.deleteOne({ filename: req.params.filename });
    res.status(200).send("File deleted successfully");
  } catch (err) {
    console.error("Failed to log in", err);
    res.status(500).send(err);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
