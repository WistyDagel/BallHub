import React, { PureComponent } from "react";
import { AppRegistry, StyleSheet, Dimensions, View } from "react-native";
import {Accelerometer} from "expo-sensors"
import { GameLoop } from "react-native-game-engine";

const { width, height} = Dimensions.get("window");
const RADIUS = 30;

export default class Dodge extends PureComponent {
  constructor() {
    super();
    this.state = {
      x: width / 2 - RADIUS,
      y: height / 2 - RADIUS,
      sensorData: {
        x: '',
        y: ''
      }
    };
  }

  updateHandler = ({ touches, screen, layout, time }) => {
        this.runAccelerometer();
        this.setState({
            x: this.state.x + round(this.state.sensorData.x),
            y: this.state.y + round(this.state.sensorData.y)
        });
  };

  runAccelerometer = () => {
      Accelerometer.addListener(data => {
        this.setState({sensorData: data})
        console.log(round(this.state.sensorData.x))
    });
  }


  render() {
    return (
      <GameLoop style={styles.container} onUpdate={this.updateHandler}>

        <View style={[styles.player, { left: this.state.x, top: this.state.y }]} />

      </GameLoop>
    );
  }
}

function round(n) {
    if (!n) {
      return 0;
    }
  
    return Math.floor(n * 1000) / 100;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#272727"
  },
  player: {
    position: "absolute",
    backgroundColor: "red",
    width: RADIUS * 2,
    height: RADIUS * 2,
    borderRadius: RADIUS * 2
  }
});