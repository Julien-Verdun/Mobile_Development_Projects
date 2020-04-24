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

export function timeToSec(time) {
  let listTime = time.split(":").map((elt) => parseInt(elt));
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
