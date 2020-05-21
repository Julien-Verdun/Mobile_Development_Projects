// run the command line node db_builder.js to fill in the databse with the data from trainings.JSON file

let MongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017/";

let trainingCollection = "trainings",
  descriptionCollection = "descriptions",
  imageCollection = "images",
  trainingTypeCollection = "trainingTypes",
  databaseName = "homeTrainerDB";

let listCollections = [
  trainingCollection,
  descriptionCollection,
  imageCollection,
  trainingTypeCollection,
];
const fs = require("fs");

let rawTrainingData = fs.readFileSync("./trainings.json");
let trainingData = JSON.parse(rawTrainingData);

let rawDescriptionData = fs.readFileSync("./descriptions.json");
let descriptionData = JSON.parse(rawDescriptionData);

let rawImageData = fs.readFileSync("./images.json");
let imageData = JSON.parse(rawImageData);

let rawTrainingTypeData = fs.readFileSync("./trainingTypes.json");
let trainingTypeData = JSON.parse(rawTrainingTypeData);

let listData = [trainingData, descriptionData, imageData, trainingTypeData];

console.log("trainingData : ", trainingData);
console.log("descriptionData : ", descriptionData);
console.log("DimageDataATA : ", imageData);
console.log("trainingTypeData : ", trainingTypeData);

let client = new MongoClient(url, { useUnifiedTopology: true });

client.connect(function (err, db) {
  if (err) throw err;
  var dbo = db.db(databaseName);

  //delete all data from all collections
  listCollections.forEach((collection) => {
    dbo.collection(collection).deleteMany({}, function (err, obj) {
      if (err) throw err;
      console.log(
        "Collection " +
          collection +
          ", " +
          obj.result.n +
          " document(s) deleted"
      );
    });
  });

  console.log("Data successfully removed");

  // insert all documents for all collections
  listData.forEach((collectionData, index) => {
    dbo
      .collection(listCollections[index])
      .insertMany(collectionData, function (err, res) {
        if (err) throw err;
        console.log(
          "Collection " +
            listCollections[index] +
            ", number of documents inserted : " +
            res.insertedCount
        );
        db.close();
      });
  });

  console.log("Data successfully added");
});
