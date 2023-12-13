const { MongoClient, ServerApiVersion } = require('mongodb');

const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
// const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

// Routes
app.use(require("./routes/media"));

const uri = process.env.ATLAS_URI;

// get driver connection
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // await client.db(process.env.DATABASE).command(
    //   {
    //     insert: 'media',
    //     documents: [
    //       {
    //         logoImageUrl: "/images/logos/Loki.png",
    //         showTitle: "Loki",
    //         watchUrl: "https://www.disneyplus.com/series/loki/6pARMvILBGzF",
    //         watchIconUrl: "/images/logos/DisneyPlus.png",
    //         phase: 1
    //       }
    //     ]
    //   }, (err, db) => {
    //     console.log('I DONT FUCkING K NOW', err, db)
    //   })

    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}

app.listen(3001, () => console.log('Example app is listening on port 3001.'));

run().catch(console.dir);