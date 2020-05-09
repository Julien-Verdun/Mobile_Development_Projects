import { shuffle } from "./../src/utils/functions.js";

export function getTraining() {
  return shuffle(Training);
}

const Training = [
  {
    exerciseId: "tra1",
    type: "For Time",
    areDifficulties: true,
    training: {
      easy: {
        numberRounds: 5,
        listTrainings: ["Squat", "Push-ups", "Sit-ups"],
        listReps: [10, 10, 10],
      },
      medium: {
        numberRounds: 5,
        listTrainings: ["Squat", "Push-ups", "Sit-ups"],
        listReps: [15, 15, 15],
      },
      hard: {
        numberRounds: 5,
        listTrainings: ["Squat", "Push-ups", "Sit-ups"],
        listReps: [20, 20, 20],
      },
    },
  },
  {
    exerciseId: "tra2",
    type: "AMRAP",
    areDifficulties: true,
    training: {
      easy: {
        numberRounds: 20,
        listTrainings: ["Burpees", "American Swing", "Box Jump"],
        listReps: [5, 15, 10],
      },
      medium: {
        numberRounds: 20,
        listTrainings: ["Burpees", "American Swing", "Box Jump"],
        listReps: [10, 20, 15],
      },
      hard: {
        numberRounds: 20,
        listTrainings: ["Burpees", "American Swing", "Box Jump"],
        listReps: [15, 30, 20],
      },
    },
  },
  {
    exerciseId: "tra3",
    type: "AMRAP",
    areDifficulties: false,
    training: {
      numberRounds: 15,
      listTrainings: ["Burpees", "Jumping Jacks"],
      listReps: [10, 25],
    },
  },
  {
    exerciseId: "tra4",
    type: "EMOM",
    areDifficulties: true,
    training: {
      easy: {
        numberRounds: 20,
        listTrainings: ["Dumbell Snatch", "American Swing"],
        listReps: [10, 20],
      },
      medium: {
        numberRounds: 20,
        listTrainings: ["Dumbell Snatch", "American Swing"],
        listReps: [15, 25],
      },
      hard: {
        numberRounds: 20,
        listTrainings: ["Dumbell Snatch", "American Swing"],
        listReps: [20, 30],
      },
    },
  },
  {
    exerciseId: "tra5",
    type: "Classic",
    areDifficulties: true,
    training: {
      easy: {
        numberRounds: 3,
        listTrainings: [
          "Plank",
          "Side Plank Left",
          "Hollow",
          "Side Plank Right",
        ],
        listReps: [0.5, 0.5, 0.5, 0.5],
      },
      medium: {
        numberRounds: 4,
        listTrainings: [
          "Plank",
          "Side Plank Left",
          "Hollow",
          "Side Plank Right",
        ],
        listReps: [0.5, 0.5, 0.5, 0.5],
      },
      hard: {
        numberRounds: 5,
        listTrainings: [
          "Plank",
          "Side Plank Left",
          "Hollow",
          "Side Plank Right",
        ],
        listReps: [0.5, 0.5, 0.5, 0.5],
      },
    },
  },
  {
    exerciseId: "tra6",
    type: "For Time",
    areDifficulties: true,
    training: {
      easy: {
        numberRounds: 10,
        listTrainings: ["Run", "Pull-ups", "Push-ups", "Squats"],
        listReps: ["400m", 5, 10, 15],
      },
      medium: {
        numberRounds: 10,
        listTrainings: ["Run", "Pull-ups", "Push-ups", "Squats"],
        listReps: ["400m", 7, 14, 21],
      },
      hard: {
        numberRounds: 10,
        listTrainings: ["Run", "Pull-ups", "Push-ups", "Squats"],
        listReps: ["400m", 10, 20, 30],
      },
    },
  },
  {
    exerciseId: "tra7",
    type: "For Time",
    areDifficulties: true,
    training: {
      easy: {
        numberRounds: 5,
        listTrainings: ["Squat", "Push-ups", "Burpees", "Jumping Lunges"],
        listReps: [10, 8, 5, 10],
      },
      medium: {
        numberRounds: 5,
        listTrainings: ["Squat", "Push-ups", "Burpees", "Jumping Lunges"],
        listReps: [20, 15, 8, 10],
      },
      hard: {
        numberRounds: 5,
        listTrainings: ["Squat", "Push-ups", "Burpees", "Jumping Lunges"],
        listReps: [25, 15, 10, 20],
      },
    },
  },
  {
    exerciseId: "tra8",
    type: "For Time",
    areDifficulties: true,
    training: {
      easy: {
        numberRounds: 1,
        listTrainings: [
          "Simple Push-ups",
          "Large Push-ups",
          "Diamond Push-ups",
          "Forearm Push-ups",
        ],
        listReps: [15, 15, 15, 15],
      },
      medium: {
        numberRounds: 1,
        listTrainings: [
          "Simple Push-ups",
          "Large Push-ups",
          "Diamond Push-ups",
          "Forearm Push-ups",
        ],
        listReps: [30, 30, 30, 30],
      },
      hard: {
        numberRounds: 1,
        listTrainings: [
          "Simple Push-ups",
          "Large Push-ups",
          "Diamond Push-ups",
          "Forearm Push-ups",
        ],
        listReps: [50, 50, 50, 50],
      },
    },
  },
  {
    exerciseId: "tra9",
    type: "For Time",
    areDifficulties: true,
    training: {
      easy: {
        numberRounds: 1,
        listTrainings: [
          "Pull-ups",
          "Jumping Jacks",
          "Push-ups",
          "Jumping Jacks",
          "Squats",
          "Jumping Jacks",
          "Jumping Lunges",
          "Jumping Jacks",
        ],
        listReps: [50, 10, 50, 10, 50, 10, 50, 10],
      },
      medium: {
        numberRounds: 2,
        listTrainings: [
          "Pull-ups",
          "Jumping Jacks",
          "Push-ups",
          "Jumping Jacks",
          "Squats",
          "Jumping Jacks",
          "Jumping Lunges",
          "Jumping Jacks",
        ],
        listReps: [50, 10, 50, 10, 50, 10, 50, 10],
      },
      hard: {
        numberRounds: 3,
        listTrainings: [
          "Pull-ups",
          "Jumping Jacks",
          "Push-ups",
          "Jumping Jacks",
          "Squats",
          "Jumping Jacks",
          "Jumping Lunges",
          "Jumping Jacks",
        ],
        listReps: [50, 10, 50, 10, 50, 10, 50, 10],
      },
    },
  },
  {
    exerciseId: "tra10",
    type: "For Time",
    areDifficulties: true,
    training: {
      easy: {
        numberRounds: 1,
        listTrainings: [
          "Sit-ups",
          "Double-Unders",
          "Toes To Bar",
          "Lunges",
          "Sit-ups",
          "Burpees",
          "Toes To Bar",
        ],
        listReps: [15, 15, 15, 15, 15, 15, 15],
      },
      medium: {
        numberRounds: 1,
        listTrainings: [
          "Sit-ups",
          "Double-Unders",
          "Toes To Bar",
          "Lunges",
          "Sit-ups",
          "Burpees",
          "Toes To Bar",
        ],
        listReps: [30, 30, 30, 30, 30, 30, 30],
      },
      hard: {
        numberRounds: 1,
        listTrainings: [
          "Sit-ups",
          "Double-Unders",
          "Toes To Bar",
          "Lunges",
          "Sit-ups",
          "Burpees",
          "Toes To Bar",
        ],
        listReps: [50, 50, 50, 50, 50, 50, 50],
      },
    },
  },
  {
    exerciseId: "tra11",
    type: "For Time",
    areDifficulties: true,
    training: {
      easy: {
        numberRounds: 1,
        listTrainings: [
          "Ring Dips",
          "Run",
          "Push-ups",
          "Run",
          "Handstand Push-ups",
          "Run",
        ],
        listReps: [15, "400m", 15, "400m", 15, "400m"],
      },
      medium: {
        numberRounds: 1,
        listTrainings: [
          "Ring Dips",
          "Run",
          "Push-ups",
          "Run",
          "Handstand Push-ups",
          "Run",
        ],
        listReps: [30, "400m", 30, "400m", 30, "400m"],
      },
      hard: {
        numberRounds: 1,
        listTrainings: [
          "Ring Dips",
          "Run",
          "Push-ups",
          "Run",
          "Handstand Push-ups",
          "Run",
        ],
        listReps: [50, "400m", 50, "400m", 50, "400m"],
      },
    },
  },
  {
    exerciseId: "tra12",
    type: "EMOM",
    areDifficulties: true,
    training: {
      easy: {
        numberRounds: 30,
        listTrainings: ["Burpees", "Russian Swing"],
        listReps: [6, 20],
      },
      medium: {
        numberRounds: 30,
        listTrainings: ["Burpees", "Russian Swing"],
        listReps: [10, 20],
      },
      hard: {
        numberRounds: 30,
        listTrainings: ["Burpees", "Russian Swing"],
        listReps: [12, 20],
      },
    },
  },
  {
    exerciseId: "tra13",
    type: "AMRAP",
    areDifficulties: false,
    training: {
      numberRounds: 20,
      listTrainings: ["Run", "Pull-ups", "Push-ups", "Squats"],
      listReps: ["400m", 5, 10, 15],
    },
  },
  {
    exerciseId: "tra14",
    type: "For Time",
    areDifficulties: true,
    training: {
      easy: {
        numberRounds: 4,
        listTrainings: [
          "Burpees",
          "Run",
          "Squats",
          "Run",
          "Push-ups",
          "Run",
          "Sit-ups",
          "Run",
        ],
        listReps: [10, "100m", 10, "100m", 10, "100m", 10, "100m"],
      },
      medium: {
        numberRounds: 4,
        listTrainings: [
          "Burpees",
          "Run",
          "Squats",
          "Run",
          "Push-ups",
          "Run",
          "Sit-ups",
          "Run",
        ],
        listReps: [15, "100m", 15, "100m", 15, "100m", 15, "100m"],
      },
      hard: {
        numberRounds: 4,
        listTrainings: [
          "Burpees",
          "Run",
          "Squats",
          "Run",
          "Push-ups",
          "Run",
          "Sit-ups",
          "Run",
        ],
        listReps: [20, "100m", 20, "100m", 20, "100m", 20, "100m"],
      },
    },
  },

  {
    exerciseId: "tra15",
    type: "Classic",
    areDifficulties: false,
    training: {
      numberRounds: 4,
      listTrainings: [
        "Plank",
        "Side Plank Left",
        "Hollow",
        "Side Plank Right",
        "V-ups",
        "Mountain Climber",
      ],
      listReps: [0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
    },
  },
];
