export function getStyle() {
  return modalNewTrainingStyle;
}

const modalNewTrainingStyle = {
  centeredView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 20,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    paddingTop: 35,
    paddingLeft: 15,
    paddingRight: 15,
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
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
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  newRepInput: {
    height: 40,
    borderColor: "#000000",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginTop: 15,
    marginBottom: 15,
  },
  newTrainingInput: {
    height: 40,
    borderColor: "#000000",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginTop: 15,
  },
  autocompleteList: {
    height: 60,
    borderColor: "#000000",
    paddingLeft: 10,
    paddingRight: 10,
  },
  newTrainingText: { flex: 1, fontSize: 15, fontStyle: "italic" },
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
    flex: 1,
    marginTop: 20,
    marginBottom: 30,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "stretch",
  },
};
