export function getStyle() {
  return userInformationsStyle;
}

const userInformationsStyle = {
  globalView: {
    flex: 1,
    paddingTop: 10,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  profilContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  profileImg: {
    width: 150,
    height: 150,
    borderRadius: 50,
  },
  name: {
    flex: 1,
    alignItems: "center",
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 10,
  },
  birthdate: { flex: 1, alignItems: "center" },
  mail: { flex: 1, color: "gray", alignItems: "center", marginBottom: 10 },
  buttonWhiteText: {
    fontSize: 16,
    color: "#FFF",
  },
  primaryButton: {
    height: 40,
    backgroundColor: "#0078bf",
    borderRadius: 10,
    margin: 10,
  },
};
