export function getStyle() {
  return myListWodStyle;
}

const myListWodStyle = {
  globalView: {
    flex: 1,
    margin: 30,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "stretch",
  },
  title: {
    marginTop: 10,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  listWod: {
    flex: 3,
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
};
