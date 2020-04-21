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
  pickerTypeChoice: { flex: 1 },
  buttonWhiteText: {
    fontSize: 16,
    color: "#FFF",
  },
  pickerTypeChoice: { flex: 1 },
  roundChoice: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  textRoundChoice: { flex: 1, fontSize: 16 },
  roundInput: { flex: 0.4 },

  //training list
  listTraining: {
    flex: 2,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  listTrainingTitle: { flex: 1, fontWeight: "bold", fontSize: 16 },
  listExercises: { flex: 1 },
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
    backgroundColor: "#aae8ff",
    borderWidth: 2,
    borderRadius: 10,
  },
};
