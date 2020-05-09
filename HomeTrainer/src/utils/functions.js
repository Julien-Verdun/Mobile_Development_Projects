import { StyleSheet } from "react-native";

export function buildStyleSheet(objectStyleSheet) {
  return StyleSheet.create(objectStyleSheet);
}

export function sum(list) {
  if (!Array.isArray(list) || list.length === 0) {
    return 0;
  }
  return list.reduce((prev, next) => {
    return prev + next;
  });
}

/*
Remove elt from array, elt is an object and array a list of object
*/
export function removeElt(array, elt) {
  let newArray = [];
  array.forEach((arrayElt) => {
    if (arrayElt.exerciseId !== elt.exerciseId) {
      newArray.push(arrayElt);
    }
  });
  return newArray;
}

export function normaliseTime(time) {
  let timeList = time.toString().split(":");
  if (timeList.length === 3) {
    return (
      (timeList[0].length === 2 ? "" : "0") +
      timeList[0] +
      ":" +
      ((timeList[1].length === 2 ? "" : "0") + timeList[1]) +
      ":" +
      ((timeList[2].length === 2 ? "" : "0") + timeList[2])
    );
  } else if (timeList.length === 2) {
    return (
      "00:" +
      ((timeList[0].length === 2 ? "" : "0") + timeList[0]) +
      ":" +
      ((timeList[1].length === 2 ? "" : "0") + timeList[1])
    );
  } else {
    if (parseInt(timeList[0]) >= 60) {
      return (
        (parseInt(timeList[0] / 3600).toString().length === 2 ? "" : "0") +
        parseInt(timeList[0] / 3600).toString() +
        ":" +
        (((parseInt(timeList[0] / 60) % 60).toString().length === 2
          ? ""
          : "0") +
          (parseInt(timeList[0] / 60) % 60).toString()) +
        ":" +
        (((timeList[0] % 60).toString().length === 2 ? "" : "0") +
          (timeList[0] % 60).toString())
      );
    } else {
      return (
        "00:" + "00:" + ((timeList[0].length === 2 ? "" : "0") + timeList[0])
      );
    }
  }
}

export function timeToSec(time) {
  let listTime = normaliseTime(time)
    .split(":")
    .map((elt) => parseInt(elt));
  return listTime[0] * 3600 + listTime[1] * 60 + listTime[2];
}

export function secToTime(sec) {
  return (
    (parseInt(sec / 3600).toString().length === 2
      ? parseInt(sec / 3600)
      : "0" + parseInt(sec / 3600)) +
    ":" +
    (parseInt((sec % 3600) / 60).toString().length === 2
      ? parseInt((sec % 3600) / 60)
      : "0" + parseInt((sec % 3600) / 60)) +
    ":" +
    (parseInt(sec % 60).toString().length === 2
      ? parseInt(sec % 60)
      : "0" + parseInt(sec % 60))
  );
}

// transform 25/12/2020 into 12/25/2020
export function frenchDateToEnglish(frenchDate) {
  return (
    frenchDate.split("/")[1] +
    "/" +
    frenchDate.split("/")[0] +
    "/" +
    frenchDate.split("/")[2]
  );
}

// return the youngest date of a date array
// date must be like this : dd/mm/yyyy
export function youngestDate(dateArray) {
  let youngestDate = null;
  if (Array.isArray(dateArray) && dateArray.length > 0) {
    youngestDate = dateArray[0];
    dateArray.forEach((date) => {
      if (
        new Date(frenchDateToEnglish(youngestDate)) >
        new Date(frenchDateToEnglish(date))
      ) {
        youngestDate = date;
      }
    });
  }
  return youngestDate;
}

// return the oldest date of a date array
// date must be like this : dd/mm/yyyy
export function oldestDate(dateArray) {
  let oldestDate = null;
  if (Array.isArray(dateArray) && dateArray.length > 0) {
    oldestDate = dateArray[0];
    dateArray.forEach((date) => {
      if (
        new Date(frenchDateToEnglish(oldestDate)) <
        new Date(frenchDateToEnglish(date))
      ) {
        oldestDate = date;
      }
    });
  }
  return oldestDate;
}

// return the best time of an array of times ["00:20:34","00:19:34",...]
export function bestTimeArray(timeArray) {
  let bestTime = timeArray[0];
  timeArray.forEach((time) => {
    if (timeToSec(time) < timeToSec(bestTime)) {
      bestTime = time;
    }
  });
  return bestTime;
}

export function isNormalInteger(str) {
  return /^\+?\d+$/.test(str);
}

export function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

export function getArrayObjEltByKey(array, key, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i][key] === value) {
      return array[i];
    }
  }
  return null;
}
