export function getStyle() {
  return amrapStyle;
}

const amrapStyle = {
  globalView: {
    flex: 1,
    margin: 20,
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
  timeCap: {
    flex: 0.1,
    fontSize: 16,
    fontStyle: "italic",
  },
  textView: {
    flex: 0.5,
  },
  listTrainings: {
    flex: 1,
    fontSize: 15,
  },
};
