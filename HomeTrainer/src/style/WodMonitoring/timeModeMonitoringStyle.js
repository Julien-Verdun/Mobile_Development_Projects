export function getStyle() {
  return timeModeMonitoringStyle;
}

const timeModeMonitoringStyle = {
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
    fontSize: 30,
    marginLeft: "auto",
    marginRight: "auto",
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
  leftTime: {
    flex: 0.3,
    fontWeight: "bold",
    fontSize: 40,
    textAlign: "right",
  },
  training: {
    flex: 1,
    fontSize: 30,
  },
  endWod: {
    flex: 1,
    color: "#119944",
    fontSize: 40,
    fontWeight: "bold",
    marginLeft: "auto",
    marginRight: "auto",
  },
  buttons: {
    flex: 1,
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  buttonWhiteText: {
    fontSize: 16,
    color: "#FFF",
  },
  button: {
    backgroundColor: "#34A853",
    height: 60,
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
