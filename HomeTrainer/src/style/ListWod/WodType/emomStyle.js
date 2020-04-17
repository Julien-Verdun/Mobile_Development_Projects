export function getStyle() {
  return emomStyle;
}

const emomStyle = {
  globalView: {
    flex: 1,
    margin: 40,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  globalText: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  numberRounds: {
    flex: 0.1,
    fontSize: 16,
    fontStyle: "italic",
  },
};
