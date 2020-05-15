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
      counter: 1
    };
  }
  
  componentDidMount(){
    Accelerometer.addListener(item => {this.setState(
      {movementX: item.x * 1000});
    });
    this.state.blockTop -= 3;
    
    let d = new Date()
      this.setState({
        time: d.getSeconds()
      });
    let second = d.getSeconds();
    
    if (this.state.time < second) {
      this.setState({
        [`blockTop${this.state.counter}`] : 100
      })

      console.log(`Block ${this.state.counter} = ${this.state[`blockTop${this.state.counter}`]}`);

      this.state.counter += 1;
    }
  }

  render() {
    return (
      <GameLoop style={styles.container} onUpdate={this.componentDidMount()}>

        <View style={[styles.ball, { left: this.state.movementX}]} />
        <View style={[styles.block, {top: `${this.state.blockTop}%`, left: '30%'}]}/>

      </GameLoop>
    );
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
    backgroundColor: 'green',
    position: 'absolute'
  }
});