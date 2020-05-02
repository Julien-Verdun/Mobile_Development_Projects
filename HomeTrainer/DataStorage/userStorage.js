import { fetchData, storeData } from "./dataStorage.js";

const userStoreKey = "@MySuperStore:user";

export async function getStoredUser() {
  let data;
  await fetchData(userStoreKey).then((result) => {
    data = processStoredUser(result);
  });
  return data;
}

export async function storeUser(user) {
  let userStr = userToStr(user);
  fetchData(userStoreKey).then((storedUSer) => {
    storeData(userStoreKey, storedUSer + "*-*" + userStr).then(
      console.log("Entrainement registered : ", storedUSer + "*-*" + userStr)
    );
  });
}

export async function restoreUser(userObj) {
  getStoredUser().then((userArray) => {
    let userArrayStr = "";
    if (userArray.length === 0) {
      userArrayStr = userToStr(userObj);
    } else {
      userArray.forEach((user) => {
        if (user.userId !== userObj.userId) {
          userArrayStr += userToStr(user) + "*-*";
        } else {
          userArrayStr += userToStr(userObj) + "*-*";
        }
      });
      userArrayStr.slice(0, userArrayStr.length - 3);
    }
    storeData(userStoreKey, userArrayStr).then(
      console.log("All user stored again")
    );
  });
}

export function userToStr(user) {
  let userStr = "";
  Object.keys(user).forEach((key) => {
    userStr += user[key] + "*;*";
  });
  return userStr.slice(0, userStr.length - 3);
}

// export function modifyUser(userArray, userChange) {
//   console.log("modifyUser  : ", userArray, userChange);
//   let newUserArray = [];
//   userArray.forEach((user) => {
//     if (user.userId === userChange.userId) {
//       newUserArray.push(userChange);
//     } else {
//       newUserArray.push(user);
//     }
//   });
//   console.log("user modified", newUserArray);
//   return newUserArray;
// }

export function processStoredUser(data) {
  let users = [];
  console.log("processStoredUser : ", data);
  if (data !== null) {
    let user;
    data.split("*-*").forEach((elt) => {
      if (elt !== "null" && elt.includes("*;*")) {
        user = elt.split("*;*");
        console.log("user :", user);
        if (user.length === 7) {
          users.push({
            userId: user[0],
            userfirstname: user[1],
            username: user[2],
            birthdate: user[3],
            login: user[4],
            password: user[5],
            imagePath: user[6],
          });
        } else {
          console.log("Error in data processing");
        }
      }
    });
  }
  return users;
}
