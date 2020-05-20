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
      counter: 1,
      blockLeft: this.randomBlockLeft(),
      blockColors: this.randomBlockColor()
    };
  }
  
  componentDidMount(){
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
    console.log(this.randomBlockLeft);
  }

  componentWillMount(){
    Accelerometer.addListener(data => {this.setState(
      {movementX: data.x * 500}); 
    });
  }

  randomBlockColor() {
    var colorArray = [
      'yellow',
      'green',
      'greenyellow',
      'magenta',
      'turquoise',
      'purple'
    ];
    var index = Math.floor(Math.random() * colorArray.length); 
    return colorArray[index];
  }

  randomBlockLeft() {
    var leftArray = [
      20, 
      30,
      40,
      50,
      60,
      70,
      80
    ];
    var index = Math.floor(Math.random() * leftArray.length);
    return leftArray[index];
  }

  render() {
    return (
      <GameLoop style={styles.container} onUpdate={this.componentDidMount()}>

        <View style={[styles.ball, { left: this.state.movementX}]} />
        <View style={[styles.block, {top: `${this.state.blockTop}%`, left: `${this.state.blockLeft}%`, backgroundColor: `${this.state.blockColors}`}]}/>
        {/* Create an array of View elements containing blocks, append to the array over a set interval of time  */}
      </GameLoop>
    );
  }

  // componentWillUnmount() {
  //   this._unsubscribe();
  // }
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