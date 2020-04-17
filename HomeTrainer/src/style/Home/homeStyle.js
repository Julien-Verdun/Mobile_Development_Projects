export function getStyle() {
  return homeStyle;
}

const homeStyle = {
  globalView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: 15,
  },
  title: {
    flex: 0.2,
    marginTop: 30,
    fontWeight: "bold",
    fontSize: 30,
  },
  buttons: {
    flex: 1,
    margin: 10,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "stretch",
  },
  buttonWhiteText: {
    fontSize: 16,
    color: "#FFF",
  },
  primaryButton: {
    height: 60,
    width: 150,
    backgroundColor: "#0078bf",
    borderRadius: 10,
    margin: 10,
  },
};
