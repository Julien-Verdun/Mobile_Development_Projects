export function getStyle() {
  return homeStyle;
}

const homeStyle = {
  globalView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "stretch",
    margin: 15,
  },
  title: {
    flex: 0.2,
    marginLeft: "auto",
    marginRight: "auto",
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
    height: 40,
    backgroundColor: "#0078bf",
    borderRadius: 10,
    margin: 10,
  },
};
