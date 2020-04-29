export function getStyle() {
  return wodDetailsStyle;
}

const wodDetailsStyle = {
  globalView: {
    flex: 1,
    margin: 20,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  type: {
    flex: 0.1,
    fontSize: 18,
    fontWeight: "bold",
  },
  bestTimeButton: {
    height: 40,
    backgroundColor: "#007bff",
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: 5,
    marginRight: 5,
  },
  buttonWhiteText: {
    fontSize: 16,
    color: "#FFF",
  },
  primaryButton: {
    height: 60,
    backgroundColor: "#ffe800",
    borderWidth: 2,
    borderRadius: 10,
  },

  bestTime: {
    flex: 0.3,
    marginTop: 10,
    marginBottom: 20,
  },

  bestTimeLabel: {
    flex: 1,
    paddingLeft: 10,
    fontSize: 15,
  },

  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
};
