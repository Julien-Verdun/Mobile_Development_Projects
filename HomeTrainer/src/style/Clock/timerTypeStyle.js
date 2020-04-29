export function getStyle() {
  return timerTypeStyle;
}

const timerTypeStyle = {
  globalView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "stretch",
    margin: 15,
  },
  title: {
    flex: 0.15,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 30,
    fontWeight: "bold",
    fontSize: 18,
  },
  buttons: {
    flex: 2,
    margin: 0,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "stretch",
  },
  textBloc: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
    padding: 10,
  },
  titleBloc: { flex: 0.3, fontSize: 16, fontWeight: "bold" },
  descriptionBloc: { flex: 0.7, fontSize: 14 },
  buttonWhiteText: {
    fontSize: 16,
    color: "#FFF",
  },
  primaryButton: {
    height: 40,
    backgroundColor: "#0078bf",
    borderRadius: 10,
    margin: 10,
  },
};
