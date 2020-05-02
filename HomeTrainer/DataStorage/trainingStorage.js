import { fetchData, storeData } from "./dataStorage.js";
import { removeElt } from "./../src/utils/functions.js";

const trainingStoreKey = "@MySuperStore:trainings";

export async function getStoredTraining() {
  let data;
  await fetchData(trainingStoreKey).then((result) => {
    data = processStoredTraining(result);
  });
  return data;
}

export async function getNewExerciseId() {
  let maxId,
    prefixId = "mytra";
  await fetchData(trainingStoreKey).then((historicTrainings) => {
    let trainingsProcessed = processStoredTraining(historicTrainings);
    maxId =
      trainingsProcessed !== null
        ? Math.max(
            trainingsProcessed.map((training) => {
              console.log("getNewExerciseId : ", training);
              if (training !== null) {
                parseInt(
                  training.exerciseId.slice(
                    prefixId.length,
                    training.exerciseId.length
                  )
                );
              }
            })
          )
        : 0;
  });
  return prefixId + (maxId + 1).toString();
}

export async function storeTraining(trainingStr) {
  fetchData(trainingStoreKey).then((historicTrainings) => {
    storeData(trainingStoreKey, historicTrainings + "*-*" + trainingStr).then(
      console.log(
        "Entrainement registered : ",
        historicTrainings + "*-*" + trainingStr
      )
    );
  });
}

export function trainingToStr(trainingObj) {
  let trainingStr = "";
  let trainingObjArray;
  if (!Array.isArray(trainingObj)) {
    trainingObjArray = [trainingObj];
  } else {
    trainingObjArray = trainingObj;
  }
  trainingObjArray.forEach((traObj) => {
    Object.keys(traObj).forEach((key) => {
      trainingStr += traObj[key] + "*;*";
    });
    trainingStr = trainingStr.slice(0, trainingStr.length - 3);
    trainingStr += "*-*";
  });
  trainingStr = trainingStr.slice(0, trainingStr.length - 3);
  return trainingStr;
}

export async function removeTraining(trainingObj) {
  fetchData(trainingStoreKey).then((result) => {
    let newStoredtraining = trainingToStr(
      removeElt(processStoredTraining(result), trainingObj)
    );
    storeData(trainingStoreKey, newStoredtraining).then(
      console.log("Entrainement removed : ", newStoredtraining)
    );
  });
}

export function processStoredTraining(data) {
  //data : "For Time;4;Squat,Pushup;20,300"
  let training = [];
  if (data !== null) {
    let wod;
    data.split("*-*").forEach((datum) => {
      if (datum !== "null" && datum.includes("*;*")) {
        wod = datum.split("*;*");
        console.log("wod :", wod);
        if (wod.length === 5) {
          training.push({
            exerciseId: wod[0],
            type: wod[1],
            numberRounds: parseInt(wod[2]),
            listTrainings: wod[3].split(","),
            listReps: wod[4].split(",").map((elt) => {
              return parseFloat(elt);
            }),
          });
        } else {
          console.log("Error in data processing");
        }
      }
    });
  }
  return training;
}
