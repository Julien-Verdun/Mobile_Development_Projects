import { fetchData, storeData } from "./dataStorage.js";

/*

Storage :
-@MySuperStore:timer -> includes the training, rest and total time for interval timer: 00:23:21*-*00:...

*/

const intervalTimerStoreKey = "@MySuperStore:intervaltimer";

/*
Read and process the current best time for every exercise.
*/
export async function getStoredIntervalTimer() {
  let data;
  await fetchData(intervalTimerStoreKey).then((intervalTime) => {
    console.log("intervalTime : ", intervalTime);
    data = processStoredIntervalTimer(intervalTime);
  });
  return data;
}

export async function replaceIntervalTimer(trainingTime, restTime, totalTime) {
  storeData(
    intervalTimerStoreKey,
    trainingTime + "*-*" + restTime + "*-*" + totalTime
  );
}

const amrapTimerStoreKey = "@MySuperStore:amraptimer";

function processStoredIntervalTimer(data) {
  let dataProcess = data;
  if (data !== null && data.includes("*-*")) {
    dataProcess = data
      .split("*-*")
      .filter((time) => time !== "null" && time !== "");
  }
  if (dataProcess === null || dataProcess.length != 3) {
    return {
      trainingTime: 20,
      restTime: 10,
      totalTime: 240,
    };
  } else {
    return {
      trainingTime: dataProcess[0],
      restTime: dataProcess[1],
      totalTime: dataProcess[2],
    };
  }
}

/*
Read and process the current best time for every exercise.
*/
export async function getStoredAmrapTimer() {
  let data;
  await fetchData(amrapTimerStoreKey).then((intervalTime) => {
    data = processStoredAmrapTimer(intervalTime);
  });
  return data;
}

export async function replaceAmrapTimer(totalTime) {
  storeData(amrapTimerStoreKey, totalTime);
}

function processStoredAmrapTimer(data) {
  if (data !== "") {
    return {
      totalTime: 360,
    };
  } else {
    return {
      totalTime: data,
    };
  }
}
