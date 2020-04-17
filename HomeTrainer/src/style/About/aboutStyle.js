export function getStyle() {
  return aboutStyle;
}

const aboutStyle = {
  globalView: {
    flex: 1,
    margin: 10,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  title: {
    flex: 0.3,
    fontSize: 18,
  },
  mainText: {
    fontSize: 14,
  },
  textView: {
    flex: 0.3,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 250,
    height: 250,
  },
};
