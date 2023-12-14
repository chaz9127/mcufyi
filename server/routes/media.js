const express = require("express");
 
// mediaRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const mediaRoutes = express.Router();
 
const ObjectId = require("mongodb").ObjectId;
const db = require("../db/conn");
 
// This section will help you get a list of all the records.
mediaRoutes.get('/media', async (req, res) => {
  const apiParams = new URLSearchParams(req._parsedUrl.search);
  const sortBy = apiParams.get('sortBy'); // find a dynamic way to sort. sortBy=releaseDate,phase
  await db().then(async resp => {
    const testThis = await resp.collection('media').find().sort({ releaseDate: 1, phase: 1}).toArray();

    res.send(testThis);
  });
});
 
// This section will help you get a single record by id
// mediaRoutes.route("/media/:id").get((req, res) => {
//  let db_connect = dbo.getDb();
//  let myquery = { _id: ObjectId(req.params.id) };
//  db_connect
//    .collection("media")
//    .findOne(myquery, function (err, result) {
//      if (err) throw err;
//      res.json(result);
//    });
// });
 
// // This section will help you create a new record.
// mediaRoutes.post("/media/add", (req, response) => {
//  let db_connect = dbo.getDb('McuFyi0');
//  let myobj = {
//   logoImageUrl: "/images/logos/Loki.png",
//   showTitle: "Loki",
//   watchUrl: "https://www.disneyplus.com/series/loki/6pARMvILBGzF",
//   watchIconUrl: "/images/logos/DisneyPlus.png",
//  };
//  db_connect.collection("media").insertOne(myobj, function (err, res) {
//    if (err) throw err;
//    response.json(res);
//  });
// });
 
// This section will help you update a record by id.
// mediaRoutes.route("/update/:id").post(function (req, response) {
//  let db_connect = dbo.getDb();
//  let myquery = { _id: ObjectId(req.params.id) };
//  let newvalues = {
//    $set: {
//      name: req.body.name,
//      position: req.body.position,
//      level: req.body.level,
//    },
//  };
//  db_connect
//    .collection("records")
//    .updateOne(myquery, newvalues, function (err, res) {
//      if (err) throw err;
//      console.log("1 document updated");
//      response.json(res);
//    });
// });
 
// This section will help you delete a record
mediaRoutes.delete("/media/:id", async (req, res) => {
  await db().then(async resp => {
    const deleted = await resp.collection('media').deleteOne({ _id: new ObjectId(req.params.id) }, (err, obj) => {
      if (err) throw err;
    })
  });
  res.send({testing: 'testing'})
//  let db_connect = dbo.getDb();
//  let myquery = { _id: ObjectId(req.params.id) };
//  db_connect.collection("records").deleteOne(myquery, function (err, obj) {
//    if (err) throw err;
//    console.log("1 document deleted");
//    response.json(obj);
//  });
});
 
module.exports = mediaRoutes;