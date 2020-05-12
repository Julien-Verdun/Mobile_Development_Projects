/*
This file includes the TrainingTypeDescription variable, which is an object where keys are the training type'names and values the training type's descriptions.
*/

// this function returns the description of the given training type trainingType
// or a defined text if no description is available
export function getTrainingTypeDescription(trainingType) {
  if (
    Object.keys(TrainingTypeDescription).includes(trainingType) &&
    TrainingTypeDescription[trainingType] !== ""
  ) {
    return TrainingTypeDescription[trainingType];
  }
  return "No description available for this exercise, you can check on the internet :)";
}

export function getAllTrainingTypeLocalDescriptions() {
  return TrainingTypeDescription;
}

export const TrainingTypeDescription = {
  AMRAP:
    "AMRAP is simple: It stands for As Many Rounds (or Reps) as Possible. In circuit training, an AMRAP workout means you need to try to complete the circuit as many times as possible in the time you’re given.",
  "For Time":
    "You complete a certain amount of work, no matter how long it takes (perhaps subject to a time cap). This differs from AMRAP where you keep working for a certain amount of time, then you are done.",
  EMOM:
    "Every Minute on the Minute. This is a workout where you do a specific exercise every time a new minute starts. If you finish before the next minute begins, you can rest until the next minute starts. But don’t get too comfortable!",
  Classic:
    "The classic training type is used for training with timed exercise.",
};
