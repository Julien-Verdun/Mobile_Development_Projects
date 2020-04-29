export function getStyle() {
  return modalIntervalTimerStyle;
}

const modalIntervalTimerStyle = {
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    paddingTop: 35,
    paddingLeft: 15,
    paddingRight: 15,
    alignItems: "stretch",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalText: { flex: 0.2, fontSize: 16, fontWeight: "bold" },

  intervalTimerInput: {
    borderColor: "#000000",
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    padding: 10,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 20,
  },
  intervalTimerInputLabel: { flex: 0.2, fontSize: 16 },

  intervalTimerButton: {
    height: 40,
    backgroundColor: "#007bff",
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: 5,
    marginRight: 5,
  },
  buttonView: {
    flex: 0.3,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  cancelButton: {
    height: 40,
    backgroundColor: "#33ff73",
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: 5,
    marginRight: 5,
  },
  buttonWhiteText: {
    fontSize: 16,
    color: "#FFF",
  },
  intervalTimerForm: {
    flex: 1,
    marginTop: 20,
    marginBottom: 30,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "stretch",
  },
  intervalTimerPanel: {
    margin: 20,
    color: "red",
    fontSize: 16,
    fontWeight: "bold",
  },
};
