export function getStyle() {
  return loginStyle;
}

const loginStyle = {
  globalView: {
    flex: 0.3,
    margin: 30,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "stretch",
  },
  loginInput: {
    flex: 1,
    borderRadius: 10,
    borderColor: "#000000",
    borderWidth: 1,
    margin: 5,
    padding: 10,
  },
  passwordInput: {
    flex: 1,
    borderRadius: 10,
    borderColor: "#000000",
    borderWidth: 1,
    margin: 5,
    padding: 10,
  },
  buttonWhiteText: {
    fontSize: 16,
    color: "#FFF",
  },
  primaryButton: {
    flex: 0.5,
    backgroundColor: "#34A853",
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
  },
};
