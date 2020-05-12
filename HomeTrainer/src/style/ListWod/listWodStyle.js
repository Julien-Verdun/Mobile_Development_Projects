export function getStyle() {
  return listWodStyle;
}

const listWodStyle = {
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
  loadingContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
};
