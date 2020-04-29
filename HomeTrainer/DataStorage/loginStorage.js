import { fetchData, storeData } from "./dataStorage.js";

/*

Storage :
-@MySuperStore:login -> 

*/

const loginStoreKey = "@MySuperStore:login";

/*
Read and process the current best time for every exercise.
*/
export async function getUserToken() {
  let data;
  data = {
    username: "julien",
  };
  //   await fetchData(loginStoreKey).then((bestTime) => {
  //     data = processStoredBestTimes(bestTime);
  //   });
  return data;
}
