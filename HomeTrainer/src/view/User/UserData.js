import React from "react";
import { LineChart } from "react-native-chart-kit";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { getStyle } from "../../style/User/userDataStyle.js";
import {
  buildStyleSheet,
  youngestDate,
  oldestDate,
  timeToSec,
  secToTime,
  sum,
  frenchDateToEnglish,
} from "../../utils/functions.js";
import { Dimensions } from "react-native";
import { connect } from "react-redux";

import { Table, TableWrapper, Row } from "react-native-table-component";

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "#fff" },
  header: { height: 50, backgroundColor: "#537791" },
  text: { textAlign: "center", fontWeight: "100" },
  dataWrapper: { marginTop: -1 },
  row: { height: 40, backgroundColor: "#E7E6E1" },
});

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
    this.state = {
      listDateReduced: [],
      listOccurences: [],
      listDate: [],
      listTime: [],
      nbTraining: 0,
      nbDate: 0,
      nbDay: 0,
      totalTimeTraining: 0,
      averageTimeTraining: 0,
    };
    this.computVariables = this.computVariables.bind(this);
  }
  componentDidMount() {
    this.computVariables();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.historic.historic != this.props.historic.historic) {
      this.computVariables();
    }
  }

  computVariables() {
    let listTraining = [];
    Object.keys(this.props.historic.historic).forEach((trainingId) => {
      listTraining = listTraining.concat(
        this.props.historic.historic[trainingId]
      );
    });

    let nbTraining = listTraining.length,
      nbDate,
      nbDay,
      totalTimeTraining,
      averageTimeTraining,
      listDateReduced = [],
      listOccurences = [],
      listDate = [],
      listTime = [];
    if (listTraining.length > 0) {
      listDate = listTraining.map((elt) => elt.split(";")[0]);
      listTime = listTraining.map((elt) => elt.split(";")[1]);
      for (var i = 0; i < listDate.length; i++) {
        if (!listDateReduced.includes(listDate[i])) {
          listDateReduced.push(listDate[i]);
          listOccurences.push(1);
        } else {
          listOccurences[listDateReduced.indexOf(listDate[i])] += 1;
        }
      }
      nbDate = listDateReduced.length;
      nbDay =
        1 +
        parseInt(
          (new Date(frenchDateToEnglish(oldestDate(listDateReduced))) -
            new Date(frenchDateToEnglish(youngestDate(listDateReduced)))) /
            (24000 * 3600)
        );
      totalTimeTraining = sum(listTime.map((time) => timeToSec(time)));
      averageTimeTraining = parseInt(totalTimeTraining / nbTraining);
      totalTimeTraining = secToTime(totalTimeTraining);
      averageTimeTraining = secToTime(averageTimeTraining);
    } else {
      nbDate = 0;
      nbDay = 0;
      totalTimeTraining = 0;
    }
    this.setState({
      listDate,
      listTime,
      listDateReduced,
      listOccurences,
      nbTraining,
      totalTimeTraining,
      averageTimeTraining,
      nbDate,
      nbDay,
    });
    // console.log(
    //   "VARIABLES : ",
    //   listTraining,
    //   listDateReduced,
    //   listOccurences,
    //   nbTraining,
    //   totalTimeTraining,
    //   averageTimeTraining,
    //   nbDate,
    //   nbDay
    // );
  }

  render() {
    const table = {
      tableHead: ["ExerciseId", "Date", "Time"],
      widthArr: [80, 80, 80],
    };
    let tableData = [];
    this.state.listDate.forEach((date, index) => {
      tableData.push([
        Object.keys(this.props.historic.historic)[index],
        date,
        this.state.listTime[index],
      ]);
    });

    return (
      <View style={this.userDataStyle.globalView}>
        <View style={this.userDataStyle.lineChart}>
          <Text>Number of training achieved : {this.state.nbTraining}</Text>
          <Text>Number of day of training : {this.state.nbDate}</Text>
          <Text>
            Number of training per day :{" "}
            {this.nbDay !== 0
              ? parseInt((100 * this.state.nbTraining) / this.state.nbDay) / 100
              : 0}
          </Text>
          <Text>
            Number of training per week :{" "}
            {this.state.nbDay !== 0
              ? parseInt(
                  (100 * this.state.nbTraining) / (7 * this.state.nbDay)
                ) / 100
              : 0}
          </Text>
          <Text>Total time in training : {this.state.totalTimeTraining}</Text>

          <Text>
            Average time in training : {this.state.averageTimeTraining}
          </Text>

          <ScrollView horizontal={true}>
            <View>
              <Table borderStyle={{ borderWidth: 1, borderColor: "#C1C0B9" }}>
                <Row
                  data={table.tableHead}
                  widthArr={table.widthArr}
                  style={styles.header}
                  textStyle={styles.text}
                />
              </Table>
              <ScrollView style={styles.dataWrapper}>
                <Table borderStyle={{ borderWidth: 1, borderColor: "#C1C0B9" }}>
                  {tableData.map((rowData, index) => (
                    <Row
                      key={index}
                      data={rowData}
                      widthArr={table.widthArr}
                      style={[
                        styles.row,
                        index % 2 && { backgroundColor: "#F7F6E7" },
                      ]}
                      textStyle={styles.text}
                    />
                  ))}
                </Table>
              </ScrollView>
            </View>
          </ScrollView>

          <LineChart
            data={{
              labels:
                this.state.listDateReduced.length <= 0
                  ? labels
                  : this.state.listDateReduced,
              datasets: [
                {
                  data:
                    this.state.listOccurences.length <= 0
                      ? data
                      : this.state.listOccurences,
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
