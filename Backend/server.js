// var http = require("http");
var express = require("express");
var app = express();

var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

var dbCollection = "profils";

var client = new MongoClient(url, { useUnifiedTopology: true });

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

client.connect(function (err, db) {
  if (err) throw err;
  else {
    app.get("/allProfil", function (req, res) {
      // requete qui renvoit tout les profils
      var dbo = db.db("mydb");
      var mysort = { "fields.etablissement": 1 };
      dbo
        .collection(dbCollection)
        .aggregate([
          {
            $group: {
              _id: {
                $concat: [
                  "$fields.etablissement",
                  " - ",
                  "$fields.academie",
                  " - ",
                  "$fields.ville",
                ],
              },
              num_doc: { $sum: 1 },
            },
          },
        ])
        .toArray(function (error, result) {
          if (error) throw error;
          else {
            console.log("QUERY RESULT : ", result);
            res.send(result);
          }
        });
    });
  }
});

app.listen(8080);
