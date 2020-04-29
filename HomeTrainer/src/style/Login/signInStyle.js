export function getStyle() {
  return signInStyle;
}

const signInStyle = {
  globalView: {
    flex: 1,
    margin: 30,
    flexDirection: "column",
    justifyContent: "flex-start",
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
    marginBottom: 10,
  },
  byPassButton: {
    height: 40,
    backgroundColor: "#1a1aff",
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
  },
};
