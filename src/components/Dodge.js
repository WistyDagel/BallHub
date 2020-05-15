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
    };
  }

  componentDidMount(){
    Accelerometer.addListener(item => {this.setState(
      {movementX: item.x * 1000});
    });
  }

  render() {
    return (
      <GameLoop style={styles.container} onUpdate={this.componentDidMount()}>

        <View style={[styles.player, { left: this.state.movementX, top: this.state.movementY}]} />

      </GameLoop>
    );
  }
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