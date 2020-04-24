export function getStyle() {
  return errorStyle;
}

const errorStyle = {
  globalView: {
    height: 40,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
  },
  errorText: {
    flex: 1,
    fontSize: 15,
    fontStyle: "italic",
  },
};
