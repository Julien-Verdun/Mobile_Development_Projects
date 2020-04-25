export function getStyle() {
  return repModeMonitoringStyle;
}

const repModeMonitoringStyle = {
  globalView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "stretch",
    margin: 10,
  },
  type: {
    flex: 1,
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: 30,
  },
  time: {
    height: 80,
    fontSize: 40,
    fontWeight: "bold",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 5,
    backgroundColor: "#dae0e5",
    padding: 10,
    marginLeft: "auto",
    marginRight: "auto",
  },
  round: {
    flex: 1,
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: 30,
  },
  numberRep: {
    flex: 0.2,
    fontWeight: "bold",
    fontSize: 40,
  },

  exerciseInfo: {
    flex: 1,
    marginLeft: "auto",
    marginRight: "auto",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  training: {
    flex: 0.5,
    fontStyle: "italic",
    fontSize: 30,
  },
  endWod: {
    flex: 1,
    marginTop: 10,
    padding: 10,
    color: "#119944",
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: "auto",
    marginRight: "auto",
  },
  buttons: {
    flex: 1,
    margin: 0,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  buttonsChange: {
    flex: 1,
    margin: 0,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  buttonWhiteText: {
    fontSize: 16,
    color: "#FFF",
  },
  button: {
    flex: 1,
    backgroundColor: "#34A853",
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
  },
  buttonSave: {
    height: 60,
    backgroundColor: "#ffe800",
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
  },

  imageExercise: {
    height: 150,
    width: 200,
    marginLeft: "auto",
    marginRight: "auto",
  },
};
