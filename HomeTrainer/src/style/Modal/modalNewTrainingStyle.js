export function getStyle() {
  return modalNewTrainingStyle;
}

const modalNewTrainingStyle = {
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    paddingTop: 35,
    paddingLeft: 15,
    paddingRight: 15,
    alignItems: "flex-start",
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
  newTrainingView: {
    flex: 1,
    marginTop: 35,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  newTrainingInput: {
    flex: 1,
    borderColor: "#000000",
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    padding: 10,
    marginTop: 15,
  },
  newTrainingButton: {
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
  newTrainingForm: {
    flex: 0.5,
    marginTop: 20,
    marginBottom: 30,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "stretch",
  },
  errorPanel: {
    margin: 20,
    color: "red",
    fontSize: 16,
    fontWeight: "bold",
  },
};
