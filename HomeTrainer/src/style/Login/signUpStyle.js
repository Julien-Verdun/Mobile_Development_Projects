export function getStyle() {
  return loginStyle;
}

const loginStyle = {
  globalView: {
    flex: 1,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 10,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "stretch",
  },
  containerInput: {
    backgroundColor: "transparent",
    borderBottomColor: "transparent",
    borderTopColor: "transparent",
  },
  inputContainerInput: {
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 10,
  },
  inputInput: {
    backgroundColor: "white",
  },
  datePickerInput: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  buttonWhiteText: {
    fontSize: 16,
    color: "#FFF",
  },
  signUpButton: {
    height: 40,
    backgroundColor: "#ff1a1a",
    borderRadius: 10,
    marginTop: 10,
  },
};
