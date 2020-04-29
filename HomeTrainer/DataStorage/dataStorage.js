import { AsyncStorage } from "react-native";

/*
Store value in the async storage, and is accessible with key
*/
export async function storeData(key, value) {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log("storeData error : ", error);
  }
}

/*
Returns informations stored with keys (an array of keys or a single key)
*/
export async function fetchData(keys) {
  try {
    // if multiple keys are given
    if (Array.isArray(keys)) {
      // if there is at least one key
      if (keys.length !== 0) {
        const value = await AsyncStorage.multiGet(keys);
        return value;
      }
      // if no key is given
      else {
        console.log("No key is given");
        return [];
      }
    }
    // if a single key is given
    else {
      const value = await AsyncStorage.getItem(keys);
      return value;
    }
  } catch (error) {
    console.log("fetchData error : ", error);
    return null;
  }
}

/*
Returns all keys stored
*/
export async function getAllKeys() {
  try {
    const value = await AsyncStorage.getAllKeys();
    return value;
  } catch (error) {
    console.log("getAllKeys error : ", error);
    return null;
  }
}

/*
Delete informations stored with key
*/
export async function removeData(keys) {
  try {
    // if multiple keys are given
    if (Array.isArray(keys)) {
      // if there is at least one key
      if (keys.length !== 0) {
        await AsyncStorage.multiRemove(keys);
      }
      // if no key is given
      else {
        console.log("No data to remove");
        return null;
      }
    }
    // if a single key is given
    else {
      await AsyncStorage.removeItem(keys);
    }
  } catch (error) {
    console.log("removeData error : ", error);
    return null;
  }
}

/*
Delete informations stored with key
*/
export async function removeAllData() {
  getAllKeys().then((keys) => {
    removeData(keys).then(() => {
      console.log("All data has been deleted");
    });
  });
}
