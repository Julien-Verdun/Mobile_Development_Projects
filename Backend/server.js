// server of my application HomeTrainer, the queries search into the mongoDB database and return the result
let http = require("http");
let express = require("express");
let app = express();

let MongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017/";

let trainingCollection = "trainings",
  descriptionCollection = "descriptions",
  imageCollection = "images",
  trainingTypeCollection = "trainingTypes",
  databaseName = "homeTrainerDB";

let client = new MongoClient(url, { useUnifiedTopology: true });

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
    let dbo = db.db(databaseName);
    app
      .get("/exercises", function (req, res) {
        // query which returns all exercises
        dbo
          .collection(imageCollection)
          .find({})
          .toArray(function (error, result) {
            if (error) throw error;
            else {
              res.send(
                result.map((elt) => {
                  return elt.exercise;
                })
              );
            }
          });
      })

      //training collection
      .get("/trainings", function (req, res) {
        // query which returns all trainings
        let mysort = { exerciseId: 1 };
        dbo
          .collection(trainingCollection)
          .find({})
          .sort(mysort)
          .toArray(function (error, result) {
            if (error) throw error;
            else {
              console.log("QUERY RESULT : ", result);
              res.send(result);
            }
          });
      })

      //training collection
      .get("/trainings/:page", function (req, res) {
        // query which returns all trainings of page page
        let page = parseInt(decodeURI(req.params.page));
        console.log("PAGE :", page);
        const numberTrainingPerPage = 5;
        let total_results = 0,
          total_pages = 0;
        let mysort = { exerciseId: 1 };
        dbo
          .collection(trainingCollection)
          .aggregate([
            { $group: { _id: null, count: { $sum: 1 } } },
            { $project: { _id: 0 } },
          ])
          .toArray(function (error, result) {
            if (error) throw error;
            else {
              total_results = result.length > 0 ? result[0].count : 0;
              total_pages =
                parseInt(total_results / numberTrainingPerPage) +
                (total_results % numberTrainingPerPage !== 0 ? 1 : 0);

              if (page < total_pages) {
                dbo
                  .collection(trainingCollection)
                  .find({})
                  .sort(mysort)
                  .skip(numberTrainingPerPage * page)
                  .limit(numberTrainingPerPage)
                  .toArray(function (error, result) {
                    if (error) throw error;
                    else {
                      console.log(
                        "QUERY RESULT : ",
                        result.map((obj) => {
                          return obj.exerciseId;
                        })
                      );
                      res.send({
                        total_results: total_results,
                        total_pages: total_pages,
                        page: page,
                        data: result,
                      });
                    }
                  });
              } else {
                res.send({
                  total_results: total_results,
                  total_pages: total_pages,
                  page: page,
                  data: [],
                });
              }
            }
          });
      })
      .get("/training/:exerciseId", function (req, res) {
        // query which returns the training with exerciseId property
        let exerciseId = decodeURI(req.params.exerciseId);
        console.log("exerciseId : ", exerciseId);
        let mysort = { exerciseId: 1 };
        let query = {
          exerciseId: exerciseId,
        };
        dbo
          .collection(trainingCollection)
          .find(query)
          .sort(mysort)
          .toArray(function (error, result) {
            if (error) throw error;
            else {
              console.log("QUERY RESULT : ", result);
              res.send(result);
            }
          });
      })
      // descriptioncollection
      .get("/descriptions", function (req, res) {
        // query which returns all descriptions
        dbo
          .collection(descriptionCollection)
          .find({})
          .toArray(function (error, result) {
            if (error) throw error;
            else {
              console.log("QUERY RESULT : ", result);
              res.send(result);
            }
          });
      })
      //description collection
      .get("/descriptions/:exercise/:page", function (req, res) {
        // query which returns all descriptions of page page that match exercise name
        let page = parseInt(decodeURI(req.params.page));
        let exercise = decodeURI(req.params.exercise);
        console.log("PAGE :", page, exercise);
        const numberTrainingPerPage = 5;
        let total_results = 0,
          total_pages = 0;
        let mysort = { exerciseId: 1 };
        dbo
          .collection(descriptionCollection)
          .aggregate([
            { $match: { exercise: { $regex: exercise, $options: "$i" } } },
            { $group: { _id: null, count: { $sum: 1 } } },
            { $project: { _id: 0 } },
          ])
          .toArray(function (error, result) {
            if (error) throw error;
            else {
              console.log("RESULT : ", result);
              total_results = result.length > 0 ? result[0].count : 0;
              total_pages =
                parseInt(total_results / numberTrainingPerPage) +
                (total_results % numberTrainingPerPage !== 0 ? 1 : 0);

              if (page < total_pages) {
                dbo
                  .collection(descriptionCollection)
                  .find({ exercise: { $regex: exercise, $options: "$i" } })
                  .sort(mysort)
                  .skip(numberTrainingPerPage * page)
                  .limit(numberTrainingPerPage)
                  .toArray(function (error, result) {
                    if (error) throw error;
                    else {
                      console.log(
                        "QUERY RESULT : ",
                        result.map((obj) => {
                          return obj.exercise;
                        })
                      );
                      res.send({
                        total_results: total_results,
                        total_pages: total_pages,
                        page: page,
                        data: result,
                      });
                    }
                  });
              } else {
                res.send({
                  total_results: total_results,
                  total_pages: total_pages,
                  page: page,
                  data: [],
                });
              }
            }
          });
      })

      .get("/description/:exercise", function (req, res) {
        // query which returns the description of exercise

        let exercise = decodeURI(req.params.exercise).toLowerCase();
        var regexExercise = new RegExp(["^", exercise, "$"].join(""), "i");
        console.log("exercise : ", exercise);
        let query = {
          exercise: regexExercise,
        };
        dbo
          .collection(descriptionCollection)
          .find(query)
          .toArray(function (error, result) {
            if (error) throw error;
            else {
              console.log("QUERY RESULT : ", result);
              res.send(result);
            }
          });
      })

      // imagescollection
      .get("/images", function (req, res) {
        // query which returns all images
        dbo
          .collection(imageCollection)
          .find({})
          .toArray(function (error, result) {
            if (error) throw error;
            else {
              console.log("QUERY RESULT : ", result);
              res.send(result);
            }
          });
      })

      //image collection
      .get("/images/:exercise/:page", function (req, res) {
        // query which returns all descriptions of page page that match exercise name
        let page = parseInt(decodeURI(req.params.page));
        let exercise = decodeURI(req.params.exercise);
        console.log("PAGE :", page, exercise);
        const numberTrainingPerPage = 5;
        let total_results = 0,
          total_pages = 0;
        let mysort = { exerciseId: 1 };
        dbo
          .collection(imageCollection)
          .aggregate([
            { $match: { exercise: { $regex: exercise, $options: "$i" } } },
            { $group: { _id: null, count: { $sum: 1 } } },
            { $project: { _id: 0 } },
          ])
          .toArray(function (error, result) {
            if (error) throw error;
            else {
              total_results = result.length > 0 ? result[0].count : 0;
              total_pages =
                parseInt(total_results / numberTrainingPerPage) +
                (total_results % numberTrainingPerPage !== 0 ? 1 : 0);

              if (page < total_pages) {
                dbo
                  .collection(imageCollection)
                  .find({ exercise: { $regex: exercise, $options: "$i" } })
                  .sort(mysort)
                  .skip(numberTrainingPerPage * page)
                  .limit(numberTrainingPerPage)
                  .toArray(function (error, result) {
                    if (error) throw error;
                    else {
                      console.log(
                        "IMAGE QUERY RESULT : ",
                        result.map((obj) => {
                          return obj.exercise;
                        })
                      );
                      res.send({
                        total_results: total_results,
                        total_pages: total_pages,
                        page: page,
                        data: result,
                      });
                    }
                  });
              } else {
                res.send({
                  total_results: total_results,
                  total_pages: total_pages,
                  page: page,
                  data: [],
                });
              }
            }
          });
      })

      .get("/image/:exercise", function (req, res) {
        // query which returns the image uri of exercise

        let exercise = decodeURI(req.params.exercise).toLowerCase();
        var regexExercise = new RegExp(["^", exercise, "$"].join(""), "i");
        console.log("exercise : ", exercise);
        let query = {
          exercise: regexExercise,
        };
        dbo
          .collection(imageCollection)
          .find(query)
          .toArray(function (error, result) {
            if (error) throw error;
            else {
              console.log("QUERY RESULT : ", result);
              res.send(result);
            }
          });
      })

      // descriptioncollection
      .get("/trainingtypes", function (req, res) {
        // query which returns all training types
        dbo
          .collection(trainingTypeCollection)
          .find({})
          .toArray(function (error, result) {
            if (error) throw error;
            else {
              console.log("QUERY RESULT : ", result);
              res.send(result);
            }
          });
      })
      .get("/trainingtype/:type", function (req, res) {
        // query which returns the image uri of type

        let type = decodeURI(req.params.type).toLowerCase();
        var regexType = new RegExp(["^", type, "$"].join(""), "i");
        console.log("type : ", type);
        let query = {
          type: regexType,
        };
        dbo
          .collection(trainingTypeCollection)
          .find(query)
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
