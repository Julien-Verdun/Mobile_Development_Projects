export function getStyle() {
  return trainingCreatorStyle;
}

const trainingCreatorStyle = {
  globalView: {
    flex: 1,
    margin: 10,
    padding: 0,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  title: { marginTop: 10, marginBottom: 10, fontSize: 18, fontWeight: "bold" },
  listWod: {
    flex: 3,
  },
  buttonWhiteText: {
    fontSize: 16,
    color: "#FFF",
  },
  primaryButton: {
    height: 40,
    margin: 10,
    backgroundColor: "#ffe800",
    borderWidth: 2,
    borderRadius: 10,
  },
};
