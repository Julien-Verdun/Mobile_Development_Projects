export function getStyle() {
  return wodPanelStyle;
}

const wodPanelStyle = {
  globalView: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: 5,
    borderColor: "#000000",
    borderWidth: 1,
  },
  trainingPart: {
    flex: 0.8,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  iconPart: { flex: 0.2, alignItems: "flex-end" },
  type: {
    flex: 1,
    fontSize: 18,
    fontWeight: "bold",
  },
  listTrainings: {
    flex: 1,
    fontSize: 14,
  },
};
