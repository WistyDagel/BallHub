import React, { PureComponent } from "react";
import { AppRegistry, StyleSheet, Dimensions, View } from "react-native";
import {Accelerometer} from "expo-sensors";
import { GameLoop } from "react-native-game-engine";

const { width, height} = Dimensions.get("window");
const RADIUS = 30;

const blockWidth = 30;
const blockHeight = 80;

export default class Dodge extends PureComponent {
  constructor() {
    super();
    this.state = {
      x: width / 2 - RADIUS,
      y: height / 2 - RADIUS,
      blockTop: 100,
      blockLeft: [
        20, 
        30,
        40,
        50,
        60,
        70,
        80
      ],
      blockColors: [
        'yellow',
        'green',
        'greenyellow',
        'magenta',
        'turquoise',
        'purple'
      ]
    };
  }

  componentDidMount(){
    Accelerometer.addListener(data => {this.setState(
      {movementX: data.x * 1000}); 
    });
    this.state.blockTop -= 3;
  }

  randomBlockColor() {
    var index = Math.floor(Math.random() * this.state.blockColors.length); //0 - answers.length
    return this.state.blockLeft[index];
  }

  randomBlockLeft() {
    var index = Math.floor(Math.random() * this.state.blockLeft.length); //0 - answers.length
    return this.state.blockColors[index];
  }

  render() {
    return (
      <GameLoop style={styles.container} onUpdate={this.componentDidMount()}>

        <View style={[styles.ball, { left: this.state.movementX}]} />
        <View style={[styles.block, {top: `${this.state.blockTop}%`, left: `${this.randomBlockLeft()}%`, backgroundColor: `${this.randomBlockColor()}`}]}/>

      </GameLoop>
    );
  }

  componentWillUnmount() {
    this._unsubscribe();
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#272727"
  },
  ball: {
    position: "absolute",
    backgroundColor: "red",
    width: RADIUS * 2,
    height: RADIUS * 2,
    borderRadius: RADIUS * 2
  },
  block: {
    width: blockWidth,
    height: blockHeight,
    position: 'absolute'
  }
});