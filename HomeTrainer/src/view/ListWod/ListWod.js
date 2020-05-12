import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { getStyle } from "../../style/ListWod/listWodStyle.js";
import { buildStyleSheet } from "../../utils/functions.js";
import WodPanel from "./WodPanel.js";
import { getTrainingsPerPage } from "./../../../API/homeTrainerApi.js";
import Error from "./../Error/Error.js";

class ListWod extends React.Component {
  constructor(props) {
    super(props);
    this.listWodStyle = buildStyleSheet(getStyle());
    this.page = 0;
    this.total_pages = 0;
    this.state = {
      trainings: [],
      isLoading: true,
      apiResults: true,
    };
    this.loadTraining = this.loadTraining.bind(this);
  }

  loadTraining() {
    this.setState({ isLoading: true });
    getTrainingsPerPage(this.page + 1).then((data) => {
      this.page = data.page;
      this.total_pages = data.total_pages;
      this.setState({
        trainings: this.state.trainings.concat(data.data),
        isLoading: false,
      });
    });
  }

  componentDidMount() {
    getTrainingsPerPage(this.page).then((data) => {
      if (data.apiResults) {
        this.page = data.page;
        this.total_pages = data.total_pages;
      }
      this.setState({
        trainings: data.data,
        apiResults: data.apiResults,
        isLoading: false,
      });
    });
  }

  render() {
    let listWod = (
      <SafeAreaView style={this.listWodStyle.listWod}>
        <FlatList
          data={this.state.trainings}
          renderItem={({ item }) => (
            <WodPanel
              navigation={this.props.navigation}
              exerciseId={item.exerciseId}
              type={item.type}
              areDifficulties={item.areDifficulties}
              myTraining={false}
              training={item.training}
            ></WodPanel>
          )}
          keyExtractor={(item) => item.exerciseId}
          onEndReachedThreshold={0.25}
          onEndReached={() => {
            if (this.state.apiResults && this.page < this.total_pages) {
              this.loadTraining();
            }
          }}
        />
      </SafeAreaView>
    );
    let activityIndicator = this.state.isLoading ? (
      <View style={this.listWodStyle.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    ) : null;

    let errorNetwork = this.state.apiResults ? null : (
      <Error
        typeError={"Warning"}
        errorText={"You might have a problem with your internet connection."}
        height={60}
      ></Error>
    );

    return (
      <View style={this.listWodStyle.globalView}>
        <Text style={this.listWodStyle.title}>Workout of the Day !</Text>
        {errorNetwork}
        {listWod}
        {activityIndicator}
      </View>
    );
  }
}

export default ListWod;
