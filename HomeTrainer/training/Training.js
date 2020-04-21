import { fetchData } from "./../src/utils/dataStorage.js";

export function getTraining() {
  let data = Training;
  fetchData("@MySuperStore:trainings").then((result) => {
    data.concat(processStoredTraining(result));
  });
  return data;
}

function processStoredTraining(data) {
  //data : "For Time;4;Squat,Pushup;20,300"
  let training = [];
  if (data !== null) {
    let wod;
    data.split("*-*").forEach((datum) => {
      wod = datum.split("*;*");
      if (wod.length === 4) {
        training.push({
          type: wod[0],
          numberRounds: parseInt(wod[1]),
          listTrainings: wod[2].split(","),
          listReps: wod[3].split(",").map((elt) => {
            return parseInt(elt);
          }),
        });
      } else {
        console.log("Error in data processing");
      }
    });
  }
  return training;
}

const Training = [
  {
    type: "For Time",
    numberRounds: 3,
    listTrainings: ["Squat", "Push-ups", "Sit-ups"],
    listReps: [10, 10, 10],
    timeCap: 20,
  },
  {
    type: "AMRAP",
    numberRounds: null,
    listTrainings: ["Burpees", "American Swing", "Box Jump"],
    listReps: [10, 20, 10],
    timeCap: 20,
  },
  {
    type: "EMOM",
    numberRounds: 20,
    listTrainings: ["Dumbell Snatch"],
    listReps: [10],
    timeCap: 20,
  },
  {
    type: "Classic",
    numberRounds: 3,
    listTrainings: ["Plank", "Side Plank Left", "Hollow", "Side Plank Right"],
    listReps: [0.5, 0.5, 0.5, 0.5],
    timeCap: null,
  },
  {
    type: "For Time",
    numberRounds: 10,
    listTrainings: ["Run", "Pull-ups", "Push-ups", "Squats", "Run"],
    listReps: ["1 mile", 100, 200, 300, "1 mile"],
    timeCap: 20,
  },
];
