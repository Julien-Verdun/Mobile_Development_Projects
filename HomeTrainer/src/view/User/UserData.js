import React from "react";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import { View, Text } from "react-native";
import { getStyle } from "../../style/User/userDataStyle.js";
import { buildStyleSheet } from "../../utils/functions.js";
// import Button from "../Other/Button.js";
import { Dimensions } from "react-native";

let labels = ["January", "February", "March", "April"];
let data = [
  Math.random() * 100,
  Math.random() * 100,
  Math.random() * 100,
  Math.random() * 100,
  Math.random() * 100,
  Math.random() * 100,
];

class UserData extends React.Component {
  constructor(props) {
    super(props);
    this.userDataStyle = buildStyleSheet(getStyle());
    this.state = { labels: labels, data: data };
  }

  render() {
    return (
      <View style={this.userDataStyle.globalView}>
        <View style={this.userDataStyle.lineChart}>
          <Text style={this.userDataStyle.lineChartText}>
            My activity on the application{" "}
          </Text>
          <LineChart
            data={{
              labels: this.state.labels,
              datasets: [
                {
                  data: this.state.data,
                },
              ],
            }}
            width={Dimensions.get("window").width - 16} // from react-native
            height={220}
            yAxisLabel={""}
            chartConfig={{
              backgroundColor: "#1cc910",
              backgroundGradientFrom: "#eff3ff",
              backgroundGradientTo: "#efefef",
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 255) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
            onDataPointClick={(value, dataset, getColor) => {
              console.log(value, dataset, getColor);
            }}
          />
        </View>
      </View>
    );
  }
}

export default UserData;
