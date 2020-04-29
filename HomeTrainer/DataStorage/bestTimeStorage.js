import { fetchData, storeData } from "./dataStorage.js";

/*

Storage :
-@MySuperStore:bestTime -> includes for every exercise the best time : tra1,00:23:21*-*tra2,...

*/

const bestTimeStoreKey = "@MySuperStore:bestTime";

/*
Read and process the current best time for every exercise.
*/
export async function getStoredTBestTime() {
  let data;
  await fetchData(bestTimeStoreKey).then((bestTime) => {
    data = processStoredBestTimes(bestTime);
  });
  return data;
}

/*
This function stores the bestTime for the exercise defined by its id exerciseId, or 
replace if it already exists.
*/
export async function replaceBestTime(exerciseId, bestTime) {
  getAllTraining().then((trainings) => {
    fetchData(bestTimeStoreKey).then((oldBestTime) => {
      let newBestTime = processStoredBestTimes(oldBestTime);
      if (Object.keys(newBest).length !== 0) {
        newBestTime[exerciseId] = bestTime;
      } else {
        trainings.forEach((training) => {
          newBestTime[training.exerciseId] = null;
        });
      }
      let newBestTimeStr = "";
      Object.keys(newBestTime).forEach((exerciseId) => {
        newBestTimeStr += exerciseId + "," + newBestTime[exerciseId] + "*-*";
      });
      storeData(bestTimeStoreKey, newBestTimeStr);
    });
  });
}

/*
  tra1,00:23:21*-*tra2,... -> {tra1:"00:23:21",tra2:...}
  */
function processStoredBestTimes(data) {
  let bestTimes = {};
  data.split("*-*").forEach((time) => {
    if (time !== "null" && time !== "") {
      bestTimes[time.split(",")[0]] = time.split(",")[1];
    }
  });
  return bestTimes;
}
