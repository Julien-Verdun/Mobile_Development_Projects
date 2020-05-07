import React from "react";
import { LineChart } from "react-native-chart-kit";
import { View, Text } from "react-native";
import { getStyle } from "../../style/User/userDataStyle.js";
import { buildStyleSheet, frenchDateToEnglish } from "../../utils/functions.js";
import { Dimensions } from "react-native";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return { historic: state.historic };
};

let labels = ["January", "February", "March", "April"];
let data = [
  Math.random() * 100,
  Math.random() * 100,
  Math.random() * 100,
  Math.random() * 100,
  Math.random() * 100,
  Math.random() * 100,
];

/**
 * Display the number of training, the average number per week and month
 *
 */

class UserData extends React.Component {
  constructor(props) {
    super(props);
    this.userDataStyle = buildStyleSheet(getStyle());
    this.state = { labels: labels, data: data };
    this.listTraining = [];
  }
  componentDidMount() {
    let listTraining = [];
    Object.keys(this.props.historic.historic).forEach((trainingId) => {
      listTraining.concat(this.props.historic.historic[trainingId]);
    });
    this.listTraining = listTraining;
  }

  computeNbTraining() {
    let nbTraining = this.listTraining.length,
      nbDate,
      nbDay;
    let listDate = this.listTraining.map((elt) => elt.split(";")[0]),
      listDateReduced = [];
    for (var i = 0; i <= listDate.length; i++) {
      if (!listDateReduced.includes(listDate[i])) {
        listDateReduced.push(listDate[i]);
      }
    }
    nbDate = listDateReduced.length;

    //trouver le temps ecoulé entre deux date en jour
    // utiliser le module date pour cela
    // frenchDateToEnglish()

    this.nbTraining = nbTraining;
    this.nbDate = nbDate;
    this.nbDay = nbDay;
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
            width={Dimensions.get("window").width - 16}
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

export default connect(mapStateToProps)(UserData);
