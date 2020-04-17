export function getTraining() {
  return Training;
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
