export function getStyle() {
  return exerciseInformationsStyle;
}

const exerciseInformationsStyle = {
  globalView: {
    flex: 1,
    margin: 15,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
  },
  listExercises: { flex: 1 },
  exercisePanel: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderColor: "#000000",
    borderRadius: 5,
    borderWidth: 1,
    margin: 10,
    padding: 10,
  },
  titleExercise: {
    flex: 0.1,
    marginBottom: 10,
    fontSize: 17,
    fontWeight: "bold",
  },
  descriptionExercise: { flex: 0.5, fontSize: 15 },
  exerciseInputName: {
    height: 40,
    borderColor: "#000066",
    borderRadius: 5,
    borderWidth: 1,
    margin: 10,
    paddingLeft: 10,
  },
  imageExercise: {
    height: 250,
    width: 300,
  },
};
