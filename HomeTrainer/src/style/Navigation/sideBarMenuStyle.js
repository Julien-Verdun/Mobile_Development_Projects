export function getStyle() {
  return sideBarMenuStyle;
}

const sideBarMenuStyle = {
  container: {
    backgroundColor: "#fff",
    paddingTop: 40,
    flex: 1,
  },
  profilContainer: {
    alignItems: "center",
  },
  listItem: {
    height: 60,
    flexDirection: "row",
  },
  listRoutes: {
    flex: 1,
    paddingLeft: 20,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
  },
  title: {
    fontSize: 18,
    marginLeft: 20,
  },
  header: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  profileImg: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginTop: 20,
  },
  sidebarDivider: {
    height: 1,
    width: "100%",
    backgroundColor: "lightgray",
    marginVertical: 10,
  },
};
