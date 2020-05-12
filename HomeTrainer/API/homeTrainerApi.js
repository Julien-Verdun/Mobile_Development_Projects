/**
 * This file includes the axios request to the API
 */

import { getTraining } from "./../training/Training.js";
import {
  getTrainingTypeDescription,
  getAllTrainingTypeLocalDescriptions,
} from "./../training/TrainingTypeDescription.js";
import {
  getDescription,
  getAllDescriptions,
  getImage,
  getAllImages,
} from "./../training/Description.js";
import axios from "axios";

const IS_NETWORK = true,
  IP_SERVEUR = "192.168.1.68",
  PORT_SERVEUR = "8080";

async function objIncludes(exerciseName) {
  let lwElt = exerciseName.toLowerCase();
  let objElt;
  await axios
    .get(`http://${IP_SERVEUR}:${PORT_SERVEUR}/exercises`)
    .then((response) => {
      objElt = response.data;
    })
    .catch((error) => {
      console.log(error);
      objElt = [];
    });

  let listObjElt = objElt.map((elt) => {
    return elt.toLowerCase();
  });
  // si le nom de l'exercise est directement dans les cles
  if (listObjElt.includes(lwElt)) {
    return objElt[listObjElt.indexOf(lwElt)];
  }
  // si le nom de l'exercise avec un s en moins est dans les cles
  else if (
    lwElt[lwElt.length - 1] === "s" &&
    listObjElt.includes(lwElt.slice(0, lwElt.length - 1))
  ) {
    return objElt[listObjElt.indexOf(lwElt.slice(0, lwElt.length - 1))];
  }
  // sinon on cherche celui qui s'en rapproche le plus (contient un bout du nom de l'exercise)
  else {
    if (lwElt.includes(" ")) {
      let splitName = lwElt.split(" ");
      for (var i = 0; i < splitName.length; i++) {
        for (var j = 0; j < listObjElt.length; j++) {
          if (
            listObjElt[j] === splitName[i] ||
            (splitName[i][splitName[i].length - 1] === "s" &&
              listObjElt[j] === splitName[i].slice(0, splitName[i].length - 1))
          ) {
            return objElt[j];
          }
        }
      }
    }
  }
  return null;
}

export async function getAllTrainingTypesDescription() {
  let trainingTypeDescription = {};
  if (IS_NETWORK) {
    await axios
      .get(`http://${IP_SERVEUR}:${PORT_SERVEUR}/trainingtypes`)
      .then((response) => {
        response.data.forEach((elt) => {
          trainingTypeDescription[elt["type"]] = elt["description"];
        });
      })
      .catch((error) => {
        console.log(error);
        trainingTypeDescription = getAllTrainingTypeLocalDescriptions();
      });
  } else {
    trainingTypeDescription = getAllTrainingTypeLocalDescriptions();
  }
  return trainingTypeDescription;
}

export async function getAllExerciseDescriptions() {
  let allDescription = {};
  if (IS_NETWORK) {
    await axios
      .get(`http://${IP_SERVEUR}:${PORT_SERVEUR}/descriptions`)
      .then((response) => {
        response.data.forEach((elt) => {
          allDescription[elt["exercise"]] = elt["description"];
        });
      })
      .catch((error) => {
        console.log(error);
        allDescription = getAllDescriptions();
      });
  } else {
    allDescription = getAllDescriptions();
  }
  return allDescription;
}

export async function getExerciseDescription(exerciseName) {
  let description, firstResult;
  if (IS_NETWORK) {
    await axios
      .get(
        `http://${IP_SERVEUR}:${PORT_SERVEUR}/description/${encodeURI(
          exerciseName
        )}`
      )
      .then((response) => {
        firstResult = response.data;
      })
      .catch((error) => {
        console.log(error);
        description = getDescription(exerciseName);
      });

    if (firstResult.length !== 0) {
      description = firstResult[0]["description"];
    } else {
      await objIncludes(exerciseName).then((newExerciseName) => {
        if (newExerciseName === null) {
          description =
            "No description available for this exercise, you can check on the internet :)";
        } else {
          description = getExerciseDescription(newExerciseName);
        }
      });
    }
  } else {
    description = getDescription(exerciseName);
  }
  return description;
}

export async function getAllImagePath() {
  let allImage = {};
  if (IS_NETWORK) {
    await axios
      .get(`http://${IP_SERVEUR}:${PORT_SERVEUR}/images`)
      .then((response) => {
        response.data.forEach((elt) => {
          allImage[elt["exercise"]] = { uri: elt["uri"] };
        });
      })
      .catch((error) => {
        console.log(error);
        allImage = getAllImages();
      });
  } else {
    allImage = getAllImages();
  }

  return allImage;
}

export async function getImagePath(exerciseName) {
  let image, firstResult;
  if (IS_NETWORK) {
    await axios
      .get(
        `http://${IP_SERVEUR}:${PORT_SERVEUR}/image/${encodeURI(exerciseName)}`
      )
      .then((response) => {
        firstResult = response.data;
      })
      .catch((error) => {
        console.log(error);
        image = getImage(exerciseName);
      });

    if (firstResult.length !== 0) {
      image = {
        uri: firstResult[0]["uri"],
      };
    } else {
      await objIncludes(exerciseName).then((newExerciseName) => {
        if (newExerciseName === null) {
          image = require("./../assets/Exercises/nothing.png");
        } else {
          image = getImagePath(newExerciseName);
        }
      });
    }
  } else {
    image = getImage(exerciseName);
  }
  return image;
}

export async function getAllTrainings() {
  let trainings = [];
  if (IS_NETWORK) {
    await axios
      .get(`http://${IP_SERVEUR}:${PORT_SERVEUR}/trainings`)
      .then((response) => {
        trainings = response.data;
      })
      .catch((error) => {
        console.log(error);
        trainings = getTraining();
      });
  } else {
    trainings = getTraining();
  }
  return trainings;
}

export async function getTrainingsPerPage(page) {
  let trainings = null;
  if (IS_NETWORK) {
    await axios
      .get(`http://${IP_SERVEUR}:${PORT_SERVEUR}/trainings/${encodeURI(page)}`)
      .then((response) => {
        trainings = {
          apiResults: true,
          total_results: response.data.total_results,
          total_pages: response.data.total_pages,
          page: response.data.page,
          data: response.data.data,
        };
      })
      .catch((error) => {
        trainings = {
          apiResults: false,
          data: getTraining(),
        };
      });
  } else {
    trainings = {
      apiResults: false,
      data: getTraining(),
    };
  }
  return trainings;
}
