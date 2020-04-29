export function getStyle() {
  return intervalTimerStyle;
}

const intervalTimerStyle = {
  globalView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 30,
  },
  icon: {
    width: 60,
    height: 60,
    borderWidth: 2,
    borderRadius: 30,
    borderColor: "#0008",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  timeResume: {
    flex: 0.4,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  timeItemContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  timeResumeText: {
    flex: 0.5,
    alignItems: "center",
    fontSize: 16,
  },
  order: { flex: 0.2, fontSize: 30, margin: 20 },
  time: {
    height: 80,
    fontSize: 40,
    fontWeight: "bold",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 5,
    backgroundColor: "#dae0e5",
    padding: 10,
    margin: 10,
  },
  buttons: {
    flex: 0.6,
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
