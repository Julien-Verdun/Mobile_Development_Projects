import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { getStyle } from "../../style/ListWod/wodDetailsStyle.js";
import { buildStyleSheet, bestTimeArray } from "../../utils/functions.js";
import Button from "./../Other/Button.js";
import ModalBestTime from "./../Modal/ModalBestTime.js";
import { connect } from "react-redux";
import { Icon } from "react-native-elements";

import ForTime from "./WodType/ForTime.js";
import Amrap from "./WodType/Amrap.js";
import Emom from "./WodType/Emom.js";
import Classic from "./WodType/Classic.js";

const mapStateToProps = (state) => {
  return { historic: state.historic };
};

class WodDetails extends React.Component {
  constructor(props) {
    super(props);
    this.wodDetailsStyle = buildStyleSheet(getStyle());
    this.state = {
      difficulty: "medium",
      bestTime:
        this.props.historic.historic[this.props.route.params.exerciseId]
          .length !== 0
          ? "Best time : " +
            bestTimeArray(
              this.props.historic.historic[
                this.props.route.params.exerciseId
              ].map((elt) => elt.split(";")[1])
            )
          : //prendre le temps max
            "No stored best time",
      modalVisible: false,
    };
    this.handleModalVsible = this.handleModalVsible.bind(this);
    this.changeDifficulty = this.changeDifficulty.bind(this);
  }

  handleModalVsible(modalVisible) {
    this.setState({ modalVisible });
  }

  changeDifficulty(difficulty) {
    this.setState({ difficulty });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.historic.historic !== prevProps.historic.historic) {
      this.setState({
        bestTime:
          this.props.historic.historic[this.props.route.params.exerciseId]
            .length !== 0
            ? "Best time : " +
              bestTimeArray(
                this.props.historic.historic[
                  this.props.route.params.exerciseId
                ].map((elt) => elt.split(";")[1])
              )
            : //prendre le temps max
              "No stored best time",
      });
    }
  }

  render() {
    let params = this.props.route.params,
      trainingPath = params.areDifficulties
        ? params.training[this.state.difficulty]
        : params.training;
    // faire un render par type et uniquement renvoyer le bon component
    let wodPanel, difficultyPanel;
    let colorChosen = "#007bffaa",
      colorOther = "#fff";
    if (params.areDifficulties) {
      difficultyPanel = (
        <View style={this.wodDetailsStyle.difficultyContainer}>
          <TouchableOpacity
            onPress={() => {
              this.changeDifficulty("easy");
            }}
            style={[
              this.wodDetailsStyle.difficultyTO,
              {
                backgroundColor:
                  this.state.difficulty === "easy" ? colorChosen : colorOther,
              },
            ]}
          >
            <Text style={this.wodDetailsStyle.difficultyText}>Easy</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.changeDifficulty("medium");
            }}
            style={[
              this.wodDetailsStyle.difficultyTO,
              {
                backgroundColor:
                  this.state.difficulty === "medium" ? colorChosen : colorOther,
              },
            ]}
          >
            <Text style={this.wodDetailsStyle.difficultyText}>Medium</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.changeDifficulty("hard");
            }}
            style={[
              this.wodDetailsStyle.difficultyTO,
              {
                backgroundColor:
                  this.state.difficulty === "hard" ? colorChosen : colorOther,
              },
            ]}
          >
            <Text style={this.wodDetailsStyle.difficultyText}>Hard</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      difficultyPanel = null;
    }

    let buttonPanel = (
      <Button
        title="Start the WOD"
        styles={{
          button: this.wodDetailsStyle.primaryButton,
          title: this.wodDetailsStyle.buttonWhiteText,
        }}
        onPress={() => {
          this.props.navigation.navigate(
            params.type === "Classic"
              ? "TimeModeMonitoring"
              : "RepModeMonitoring",
            {
              type: params.type,
              numberRounds: trainingPath.numberRounds,
              listTrainings: trainingPath.listTrainings,
              listReps: trainingPath.listReps,
            }
          );
        }}
      />
    );

    if (params.type == "For Time") {
      wodPanel = (
        <ForTime
          navigation={this.props.navigation}
          exerciseId={params.exerciseId}
          type={params.type}
          areDifficulties={params.areDifficulties}
          numberRounds={trainingPath.numberRounds}
          listTrainings={trainingPath.listTrainings}
          listReps={trainingPath.listReps}
        />
      );
    } else if (params.type == "AMRAP") {
      wodPanel = (
        <Amrap
          navigation={this.props.navigation}
          exerciseId={params.exerciseId}
          type={params.type}
          areDifficulties={params.areDifficulties}
          numberRounds={trainingPath.numberRounds}
          listTrainings={trainingPath.listTrainings}
          listReps={trainingPath.listReps}
        />
      );
    } else if (params.type == "EMOM") {
      wodPanel = (
        <Emom
          navigation={this.props.navigation}
          exerciseId={params.exerciseId}
          type={params.type}
          areDifficulties={params.areDifficulties}
          numberRounds={trainingPath.numberRounds}
          listTrainings={trainingPath.listTrainings}
          listReps={trainingPath.listReps}
        />
      );
    } else if (params.type == "Classic") {
      wodPanel = (
        <Classic
          navigation={this.props.navigation}
          exerciseId={params.exerciseId}
          type={params.type}
          areDifficulties={params.areDifficulties}
          numberRounds={trainingPath.numberRounds}
          listTrainings={trainingPath.listTrainings}
          listReps={trainingPath.listReps}
        />
      );
    } else {
      wodPanel = null;
      buttonPanel = null;
    }
    let modalBestTime = null,
      bestTimeForm = null,
      buttonEvolution = null;
    if (params.type === "For Time") {
      // composant contenant le modal affiché pour renseigner le score
      modalBestTime = (
        <ModalBestTime
          exerciseId={params.exerciseId}
          modalVisible={this.state.modalVisible}
          onCancelModal={this.handleModalVsible}
          difficulty={params.areDifficulties ? this.state.difficulty : null}
        ></ModalBestTime>
      );
      //component contenant le meilleur temps et le bouton pour meilleure temps
      bestTimeForm = (
        <View style={this.wodDetailsStyle.bestTime}>
          <Text style={this.wodDetailsStyle.bestTimeLabel}>
            {this.state.bestTime}
          </Text>

          <Button
            title="Add my score"
            styles={{
              button: this.wodDetailsStyle.bestTimeButton,
              title: this.wodDetailsStyle.buttonWhiteText,
            }}
            onPress={() => {
              this.setState({ modalVisible: true });
            }}
          />

          <Button
            title="Evolution"
            styles={{
              button: this.wodDetailsStyle.evolutionButton,
              title: this.wodDetailsStyle.buttonWhiteText,
            }}
            onPress={() => {
              console.log(
                "CLIQUE : ",
                this.props.historic.historic[params.exerciseId]
              );
              // if (this.props.historic.historic[params.exerciseId].length > 0) {
              this.props.navigation.navigate("Evolution", {
                type: params.type,
                areDifficulties: params.areDifficulties,
                exerciseId: params.exerciseId,
                numberRounds: trainingPath.numberRounds,
                listTrainings: trainingPath.listTrainings,
                listReps: trainingPath.listReps,
                historic: this.props.historic.historic[params.exerciseId],
              });
              // }
            }}
          >
            <Icon name={"timeline"} size={30} color={"#000"} />
          </Button>
        </View>
      );
    }

    return (
      <View style={this.wodDetailsStyle.globalView}>
        {modalBestTime}
        <Text style={this.wodDetailsStyle.type}>{params.type}</Text>
        {difficultyPanel}
        {wodPanel}
        {bestTimeForm}
        {buttonPanel}
      </View>
    );
  }
}

export default connect(mapStateToProps)(WodDetails);
