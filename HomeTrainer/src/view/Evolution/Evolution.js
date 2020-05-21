import React from "react";
import { LineChart } from "react-native-chart-kit";
import { View, Text, SafeAreaView, FlatList } from "react-native";
import { getStyle } from "../../style/Evolution/evolutionStyle.js";
import {
  buildStyleSheet,
  timeToSec,
  secToTime,
} from "../../utils/functions.js";
import { Dimensions } from "react-native";
import Error from "./../Error/Error.js";

class Evolution extends React.Component {
  constructor(props) {
    super(props);
    this.evolutionStyle = buildStyleSheet(getStyle());
    console.log("EVOLUTION : ", this.props.route.params);
  }

  render() {
    let lineChart, dataList, errorNoData;
    if (this.props.route.params.historic.length >= 1) {
      lineChart = (
        <LineChart
          data={{
            labels: this.props.route.params.historic.map(
              (elt) => elt.split(";")[0]
            ),
            datasets: [
              {
                data: this.props.route.params.historic.map((elt) =>
                  timeToSec(elt.split(";")[1])
                ),
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
          formatYLabel={secToTime}
          bezier
          style={{
            flex: 1,
            marginVertical: 8,
            borderRadius: 16,
          }}
          onDataPointClick={(value, dataset, getColor) => {
            console.log(value, dataset, getColor);
          }}
        />
      );
      dataList = (
        <SafeAreaView style={this.evolutionStyle.dataList}>
          <Text style={this.evolutionStyle.dataTitle}>
            Historique des temps
          </Text>
          <FlatList
            data={this.props.route.params.historic}
            renderItem={({ item }) => (
              <View style={this.evolutionStyle.itemView}>
                <Text style={this.evolutionStyle.itemDate}>
                  {item.split(";")[0]}
                </Text>
                <Text style={this.evolutionStyle.itemTime}>
                  {item.split(";")[1]}
                </Text>
              </View>
            )}
            keyExtractor={(item, index) => index}
          />
        </SafeAreaView>
      );
      errorNoData = null;
    } else {
      lineChart = null;
      dataList = null;
      errorNoData = (
        <Error
          typeError={"Warning"}
          errorText={
            "No time stored, you must store at least one to see your evolution."
          }
          height={80}
        ></Error>
      );
    }
    return (
      <View style={this.evolutionStyle.globalView}>
        <View style={this.evolutionStyle.lineChart}>
          {dataList}
          {lineChart}
          {errorNoData}
        </View>
      </View>
    );
  }
}

export default Evolution;
