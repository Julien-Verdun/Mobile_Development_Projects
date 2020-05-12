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
    backgroundColor: "#ffffff",
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
  containerExerciseInputName: {
    backgroundColor: "transparent",
    borderBottomColor: "transparent",
    borderTopColor: "transparent",
  },
  inputContainerExerciseInputName: {
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 5,
  },
  inputExerciseInputName: {
    backgroundColor: "white",
  },
  imageExercise: {
    height: 250,
    width: 300,
  },
  loadingContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
};
