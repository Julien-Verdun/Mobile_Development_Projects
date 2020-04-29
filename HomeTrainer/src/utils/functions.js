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

export function isNormalInteger(str) {
  return /^\+?\d+$/.test(str);
}

export function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}
