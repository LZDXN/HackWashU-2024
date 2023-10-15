require("dotenv").config();
const express = require("express");
const { Client, FileCreateTransaction, Hbar } = require("@hashgraph/sdk");
const app = express();
const PORT = 3001;

// Your Hedera account ID and private key
const myAccountId = process.env.HEDERA_ACCOUNT_ID;
const myPrivateKey = process.env.HEDERA_PRIVATE_KEY;

// Create a client
const client = Client.forTestnet().setOperator(myAccountId, myPrivateKey);

app.use(express.json());

// API Endpoint to Create a File
app.post("/createFile", async (req, res) => {
  try {
    const { content } = req.body;
    const transactionId = await new FileCreateTransaction()
      .setContents(content)
      .setMaxTransactionFee(new Hbar(2))
      .execute(client);
    const receipt = await transactionId.getReceipt(client);
    const newFileId = receipt.fileId;
    res.status(200).send({ fileId: newFileId.toString() });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
