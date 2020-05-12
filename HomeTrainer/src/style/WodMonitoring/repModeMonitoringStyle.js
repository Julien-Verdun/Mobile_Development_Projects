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

  exerciseInfo: {
    flex: 1,
    marginLeft: "auto",
    marginRight: "auto",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingLeft: 30,
    paddingRight: 30,
  },
  training: {
    flex: 1,
    fontStyle: "italic",
    fontSize: 30,
  },
  numberRep: {
    flex: 0.3,
    textAlign: "right",
    fontWeight: "bold",
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
