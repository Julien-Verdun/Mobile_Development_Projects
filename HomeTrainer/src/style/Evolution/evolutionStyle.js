export function getStyle() {
  return evolutionStyle;
}

const evolutionStyle = {
  globalView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "stretch",
    margin: 15,
  },
  lineChart: {
    flex: 1,
    margin: 10,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
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
  dataList: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  dataTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
  },
  itemView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
  },
  itemDate: { fontWeight: "bold", marginRight: 10 },
  itemTime: {},
};
