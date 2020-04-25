export function getStyle() {
  return trainingInformationsStyle;
}

const trainingInformationsStyle = {
  globalView: {
    flex: 1,
    margin: 15,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
  },
  listTypeTrainings: { flex: 1 },
  typeTrainingPanel: {
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
  titleTypeTraining: {
    flex: 0.1,
    marginBottom: 10,
    fontSize: 17,
    fontWeight: "bold",
  },
  descriptionTypeTraining: { flex: 0.5, fontSize: 15 },
};
