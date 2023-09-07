const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");
const stripe = require("stripe")(
  "sk_test_51I1qdLIyXRr60WAX0fKT8E1wIWdOD1XRe74QwHmpxewyO53Ysd1EDhj20mQT9mAsqu6hz7Cui3VdEVXder7VrG7N0016d4ZU4n"
);
// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post('/payments/create',async (request, response) => {
    const total = request.query.total;
    console.log("payment request recieved !!! for this amount >>> ",total);
    const paymentIntent = await stripe.paymentIntents.create({
      amount:total, // subunit of currency
      currency:"inr",
    })
    // OK - created   
    response.status(201).send({
      clientSecret: paymentIntent.client_Secret,
    })
})

//Listen command
exports.api = functions.http.onRequest(app) 




// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
