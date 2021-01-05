const functions = require("firebase-functions");

const express = require("express");

const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51I5QZ3Ep1PRolxrgkWR8ArI8uItca08XxnApeh3XXB3CLso3HepE5bQ2wbudzXTtxHxXfVj23oTGJW4SnCwiuA0T004HquIiZ3"
);

//API

//API config
const app = express();

//middleware
app.use(cors({ origin: true }));
app.use(express.json()); // to send data in json format

//API routes
app.get("/", (req, res) => {
  res.status(200).send("hello world");
});

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  console.log(total);
  console.log("payment request received", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
    description: "demo",
  });
  //OK-Created
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//Listen command
exports.api = functions.https.onRequest(app);

// example endpoint
// http://localhost:5001/clone-ba5df/us-central1/api
