import { fetchData, storeData } from "./dataStorage.js";

const trainingStoreKey = "@MySuperStore:trainings";

export async function getStoredTraining() {
  let data;
  await fetchData(trainingStoreKey).then((result) => {
    data = processStoredTraining(result);
  });
  return data;
}

export async function storeTraining(trainingStr) {
  let prefixId = "mytra";
  fetchData(trainingStoreKey).then((historicTrainings) => {
    let maxId = Math.max(
      processStoredTraining(historicTrainings).map((training) =>
        parseInt(training.slice(prefixId.length, training.length).exerciseId)
      )
    );
    storeData(
      trainingStoreKey,
      historicTrainings +
        "*-*" +
        prefixId +
        (maxId + 1).toString() +
        "*;*" +
        trainingStr
    ).then(console.log("Entrainement registered"));
  });
}

export function processStoredTraining(data) {
  //data : "For Time;4;Squat,Pushup;20,300"
  let training = [];
  if (data !== null) {
    let wod;
    data.split("*-*").forEach((datum) => {
      if (datum !== "null") {
        wod = datum.split("*;*");
        if (wod.length === 5) {
          training.push({
            exerciseId: wod[0],
            type: wod[1],
            numberRounds: parseInt(wod[2]),
            listTrainings: wod[3].split(","),
            listReps: wod[4].split(",").map((elt) => {
              return parseFloat(elt);
            }),
            timeCap: null,
          });
        } else {
          console.log("Error in data processing");
        }
      }
    });
  }
  return training;
}
