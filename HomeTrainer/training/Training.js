import { fetchData } from "./../src/utils/dataStorage.js";
import { shuffle } from "./../src/utils/functions.js";

export async function getAllTraining() {
  let data = Training;
  await fetchData("@MySuperStore:trainings").then((result) => {
    data = data.concat(processStoredTraining(result));
  });
  return shuffle(data);
}

export function getTraining() {
  return shuffle(Training);
}

export async function getMyTraining() {
  let data;
  await fetchData("@MySuperStore:trainings").then((result) => {
    data = processStoredTraining(result);
  });
  return shuffle(data);
}

export async function getExerciseNames() {
  let data = Training,
    exerciseNames = [];
  await fetchData("@MySuperStore:trainings").then((result) => {
    data = data.concat(processStoredTraining(result));
  });
  data.forEach((wod) => {
    wod.listTrainings.forEach((exercise) => {
      if (!exerciseNames.includes(exercise)) {
        exerciseNames.push(exercise);
      }
    });
  });
  return exerciseNames;
}

function processStoredTraining(data) {
  //data : "For Time;4;Squat,Pushup;20,300"
  let training = [];
  if (data !== null) {
    let wod;
    data.split("*-*").forEach((datum) => {
      if (datum !== "null") {
        wod = datum.split("*;*");
        if (wod.length === 4) {
          training.push({
            type: wod[0],
            numberRounds: parseInt(wod[1]),
            listTrainings: wod[2].split(","),
            listReps: wod[3].split(",").map((elt) => {
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
    type: "AMRAP",
    numberRounds: null,
    listTrainings: ["Burpees", "Jumping Jacks"],
    listReps: [10, 25],
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
  {
    type: "For Time",
    numberRounds: 5,
    listTrainings: ["Squat", "Push-ups", "Burpees", "Jumping Lunges"],
    listReps: [20, 10, 10, 10],
    timeCap: 20,
  },
  {
    type: "For Time",
    numberRounds: 1,
    listTrainings: [
      "Simple Push-ups",
      "Large Push-ups",
      "Diamond Push-ups",
      "Forearm Push-ups",
    ],
    listReps: [50, 50, 50, 50],
    timeCap: 20,
  },
  {
    type: "For Time",
    numberRounds: 1,
    listTrainings: [
      "Pull-ups",
      "Star Jumps",
      "Push-ups",
      "Star Jumps",
      "Leg Lift",
      "Star Jumps",
      "Jumping Lunges",
      "Star Jumps",
    ],
    listReps: [50, 10, 50, 10, 50, 10, 50, 10],
    timeCap: 20,
  },
  {
    type: "For Time",
    numberRounds: 1,
    listTrainings: [
      "Sit-ups",
      "Double Unders",
      "Toes To Bar",
      "Lunges",
      "Sit-ups",
      "Burpees",
      "Toes To Bar",
    ],
    listReps: [50, 50, 50, 50, 50, 50, 50],
    timeCap: 20,
  },
  {
    type: "For Time",
    numberRounds: 1,
    listTrainings: [
      "Ring Dips",
      "Run",
      "Push-ups",
      "Run",
      "Handstand Push-ups",
      "Run",
    ],
    listReps: [50, 400, 50, 400, 50, 400],
    timeCap: 20,
  },
  {
    type: "EMOM",
    numberRounds: 30,
    listTrainings: ["Burpees", "Russian Swing"],
    listReps: [10, 20],
    timeCap: 30,
  },
];
