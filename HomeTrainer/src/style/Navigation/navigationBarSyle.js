export function getStyle() {
  return navigationBarStyle;
}

const navigationBarStyle = {
  globalView: {
    flex: 1,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    flex: 1,
    marginLeft: 30,
    fontSize: 20,
    fontWeight: "bold",
  },
  logo: { flex: 1, width: 50, height: 50 },
};
