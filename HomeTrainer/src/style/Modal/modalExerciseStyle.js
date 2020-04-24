export function getStyle() {
  return modalExerciseStyle;
}

const modalExerciseStyle = {
  centeredView: {
    flex: 1,
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    padding: 20,
    backgroundColor: "white",
    borderRadius: 20,
    paddingTop: 35,
    paddingLeft: 15,
    paddingRight: 15,
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
  modalExerciseName: {
    flex: 0.1,
    fontSize: 15,
    marginTop: 10,
    fontWeight: "bold",
  },
  scrollDescription: { flex: 0.4 },
  modalDescription: { fontSize: 15, marginTop: 10 },
  imageExercise: {
    margin: 20,
    flex: 0.5,
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
};
