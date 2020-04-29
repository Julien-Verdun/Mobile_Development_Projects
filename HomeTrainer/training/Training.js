import { getStoredTraining } from "../DataStorage/trainingStorage.js";
import { shuffle } from "./../src/utils/functions.js";

export async function getAllTraining() {
  let data = Training;
  await getStoredTraining().then((result) => {
    data = data.concat(result);
  });
  return shuffle(data);
}

export function getTraining() {
  return shuffle(Training);
}

export async function getMyTraining() {
  let data;
  await getStoredTraining().then((result) => {
    data = result;
  });
  return shuffle(data);
}

export async function getExerciseNames() {
  let data = Training,
    exerciseNames = [];
  await getStoredTraining().then((result) => {
    data = data.concat(result);
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

const Training = [
  {
    exerciseId: "tra1",
    type: "For Time",
    numberRounds: 3,
    listTrainings: ["Squat", "Push-ups", "Sit-ups"],
    listReps: [10, 10, 10],
    timeCap: 20,
  },
  {
    exerciseId: "tra2",
    type: "AMRAP",
    numberRounds: null,
    listTrainings: ["Burpees", "American Swing", "Box Jump"],
    listReps: [10, 20, 10],
    timeCap: 20,
  },
  {
    exerciseId: "tra3",
    type: "AMRAP",
    numberRounds: null,
    listTrainings: ["Burpees", "Jumping Jacks"],
    listReps: [10, 25],
    timeCap: 20,
  },
  {
    exerciseId: "tra4",
    type: "EMOM",
    numberRounds: 20,
    listTrainings: ["Dumbell Snatch"],
    listReps: [10],
    timeCap: 20,
  },
  {
    exerciseId: "tra5",
    type: "Classic",
    numberRounds: 3,
    listTrainings: ["Plank", "Side Plank Left", "Hollow", "Side Plank Right"],
    listReps: [0.5, 0.5, 0.5, 0.5],
    timeCap: null,
  },
  {
    exerciseId: "tra6",
    type: "For Time",
    numberRounds: 10,
    listTrainings: ["Run", "Pull-ups", "Push-ups", "Squats", "Run"],
    listReps: ["1 mile", 100, 200, 300, "1 mile"],
    timeCap: 20,
  },
  {
    exerciseId: "tra7",
    type: "For Time",
    numberRounds: 5,
    listTrainings: ["Squat", "Push-ups", "Burpees", "Jumping Lunges"],
    listReps: [20, 10, 10, 10],
    timeCap: 20,
  },
  {
    exerciseId: "tra8",
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
    exerciseId: "tra9",
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
    exerciseId: "tra10",
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
    exerciseId: "tra11",
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
    exerciseId: "tra12",
    type: "EMOM",
    numberRounds: 30,
    listTrainings: ["Burpees", "Russian Swing"],
    listReps: [10, 20],
    timeCap: 30,
  },
];
