export function getStyle() {
  return modalAmrapTimerStyle;
}

const modalAmrapTimerStyle = {
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
  modalText: { flex: 0.1, fontSize: 16, fontWeight: "bold" },

  amrapTimerInput: {
    borderColor: "#000000",
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    padding: 10,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 20,
  },
  amrapTimerInputLabel: { flex: 0.2, fontSize: 16 },

  amrapTimerButton: {
    height: 40,
    backgroundColor: "#007bff",
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: 5,
    marginRight: 5,
  },
  buttonView: {
    flex: 0.2,
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
  amrapTimerForm: {
    flex: 0.4,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "stretch",
  },
  amrapTimerPanel: {
    margin: 20,
    color: "red",
    fontSize: 16,
    fontWeight: "bold",
  },
};
