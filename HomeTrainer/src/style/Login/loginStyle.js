export function getStyle() {
  return loginStyle;
}

const loginStyle = {
  globalView: {
    flex: 1,
    margin: 30,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
  },
  containerExerciseInputName: {
    backgroundColor: "transparent",
    borderBottomColor: "transparent",
    borderTopColor: "transparent",
  },
  inputContainerExerciseInputName: {
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 10,
  },
  inputExerciseInputName: {
    backgroundColor: "white",
  },

  loginInput: {
    height: 40,
    borderRadius: 10,
    borderColor: "#000000",
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
  },
  passwordInput: {
    height: 40,
    borderRadius: 10,
    borderColor: "#000000",
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
  },
  buttonWhiteText: {
    fontSize: 16,
    color: "#FFF",
  },
  signInButton: {
    height: 40,
    backgroundColor: "#34A853",
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  signUpButton: {
    height: 40,
    backgroundColor: "#ff1a1a",
    borderRadius: 10,
    marginTop: 10,
  },
};
