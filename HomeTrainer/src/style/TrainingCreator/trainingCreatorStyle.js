export function getStyle() {
  return trainingCreatorStyle;
}

const trainingCreatorStyle = {
  globalView: {
    flex: 1,
    margin: 10,
    padding: 10,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  title: { marginTop: 10, marginBottom: 10, fontSize: 18, fontWeight: "bold" },
  listWod: {
    flex: 3,
  },
  typeChoice: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  textTypeChoice: { flex: 1, fontSize: 16 },
  buttonWhiteText: {
    fontSize: 16,
    color: "#FFF",
  },
  pickerContainer: {
    flex: 1,
    height: 60,
    borderRadius: 5,
    borderColor: "#000e",
    borderWidth: 1,
  },
  pickerTypeChoice: {
    flex: 1,
  },
  roundChoice: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  textRoundChoice: { flex: 1, fontSize: 16 },
  roundInput: {
    width: 50,
    borderColor: "#000e",
    borderRadius: 5,
    borderWidth: 1,
    paddingLeft: 20,
    marginRight: 30,
  },

  //training list
  listTraining: {
    flex: 2,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  listTrainingTitle: { flex: 0.2, fontWeight: "bold", fontSize: 18 },
  listTrainingPrecision: { flex: 0.3, fontStyle: "italic", fontSize: 15 },
  listExercises: { flex: 1 },

  //exercises
  exerciseView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  addButton: {
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  addButtonText: {
    marginRight: 10,
    fontSize: 16,
    color: "#FFF",
  },
  buttonWhiteText: {
    fontSize: 16,
    color: "#FFF",
  },
  primaryButton: {
    height: 40,
    margin: 10,
    backgroundColor: "#28a745",
    borderWidth: 2,
    borderRadius: 10,
  },
  addExerciseButton: {
    height: 40,
    margin: 10,
    backgroundColor: "#dd1a1a",
    borderWidth: 2,
    borderRadius: 10,
  },
};
