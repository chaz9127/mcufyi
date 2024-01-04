const { MongoClient, ServerApiVersion } = require('mongodb');
var fs = require('fs');
var mediaSeed = JSON.parse(fs.readFileSync('./seed/media.json', 'utf8'));

const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });

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

    // Seed content
    // await client.db(process.env.DATABASE).command(
    //   {
    //     insert: 'media',
    //     documents: mediaSeed,
    //   }, (err, db) => {
        
    // })

    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}

app.listen(3001, () => console.log('Example app is listening on port 3001.'));

run().catch(console.dir);