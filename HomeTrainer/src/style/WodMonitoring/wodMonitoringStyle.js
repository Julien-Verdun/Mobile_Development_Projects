export function getStyle() {
  return wodMonitoringStyle;
}

const wodMonitoringStyle = {
  globalView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    margin: 30,
  },
  type: {
    flex: 1,
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 30,
  },
  time: {
    flex: 1,
    fontSize: 40,
    fontWeight: "bold",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 5,
    backgroundColor: "#dae0e5",
    padding: 10,
    margin: 10,
  },
  round: {
    flex: 1,
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 30,
  },
  leftTime: {
    flex: 1,
    fontWeight: "bold",
    fontSize: 60,
  },
  training: {
    flex: 1,
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 30,
  },
  endWod: {
    flex: 1,
    color: "#119944",
    fontSize: 40,
    fontWeight: "bold",
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
  listWod: { flex: 1 },
};
