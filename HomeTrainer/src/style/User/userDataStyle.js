export function getStyle() {
  return userDataStyle;
}

const userDataStyle = {
  globalView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "stretch",
    margin: 15,
  },
  lineChartText: {
    flex: 0.1,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 20,
  },
  lineChart: {
    flex: 1,
    margin: 10,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
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
