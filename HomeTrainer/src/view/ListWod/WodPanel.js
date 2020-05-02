import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { getStyle } from "../../style/ListWod/wodPanelStyle.js";
import { buildStyleSheet } from "../../utils/functions.js";
import { Icon } from "react-native-elements";
import { removeTraining } from "./../../../DataStorage/trainingStorage.js";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return { myTrainings: state.myTrainings };
};

class WodPanel extends React.Component {
  constructor(props) {
    super(props);
    this.wodPanelStyle = buildStyleSheet(getStyle());
    this.backgroundColorPanel;
    if (this.props.type === "For Time") {
      this.backgroundColorPanel = "#ffff00";
    } else if (this.props.type === "EMOM") {
      this.backgroundColorPanel = "#43f30a";
    } else if (this.props.type === "AMRAP") {
      this.backgroundColorPanel = "#99bbff";
    } else if (this.props.type === "Classic") {
      this.backgroundColorPanel = "#0044ff";
    } else {
      this.backgroundColorPanel = "#4f1600";
    }
    this.toggleTraining = this.toggleTraining.bind(this);
  }

  toggleTraining() {
    let trainingToRemove = {
      exerciseId: this.props.exerciseId,
      type: this.props.type,
      numberRounds: this.props.numberRounds,
      listTrainings: this.props.listTrainings,
      listReps: this.props.listReps,
    };
    removeTraining(trainingToRemove).then(
      this.props.dispatch({
        type: "TOGGLE_REMOVE_TRAINING",
        value: trainingToRemove,
      })
    );
  }

  render() {
    let deleteIcon = this.props.myTraining ? (
      <TouchableOpacity
        onPress={this.toggleTraining}
        style={this.wodPanelStyle.iconPart}
      >
        <Icon name={"delete"} size={35} color="#000" />
      </TouchableOpacity>
    ) : null;
    return (
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate("WodDetails", {
            exerciseId: this.props.exerciseId,
            type: this.props.type,
            listTrainings: this.props.listTrainings,
            numberRounds: this.props.numberRounds,
            listReps: this.props.listReps,
          })
        }
        style={[
          this.wodPanelStyle.globalView,
          { backgroundColor: this.backgroundColorPanel },
        ]}
      >
        <View style={this.wodPanelStyle.trainingPart}>
          <Text style={this.wodPanelStyle.type}>{this.props.type}</Text>
          <Text style={this.wodPanelStyle.listTrainings}>
            {this.props.listTrainings.join("\n")}
          </Text>
        </View>
        {deleteIcon}
      </TouchableOpacity>
    );
  }
}

export default connect(mapStateToProps)(WodPanel);
