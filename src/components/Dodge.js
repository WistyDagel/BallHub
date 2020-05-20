import React, { PureComponent } from "react";
import { AppRegistry, StyleSheet, Dimensions, View } from "react-native";
import {Accelerometer} from "expo-sensors";
import { GameLoop } from "react-native-game-engine";

const { width, height} = Dimensions.get("window");
const RADIUS = 30;

const blockWidth = 30;
const blockHeight = 80;

var counter = 1;

export default class Dodge extends PureComponent {
  constructor() {
    super();
    this.state = {
      x: width / 2 - RADIUS,
      y: height / 2 - RADIUS,
      blockTop1: 100,
      blockTop2: 100,
      blockTop3: 100,
      blockTop4: 100,
      blockTop5: 100,
      counter: 1,
      blockLeft1: this.randomBlockLeft(),
      blockColor1: this.randomBlockColor(),
      blockLeft2: this.randomBlockLeft(),
      blockColor2: this.randomBlockColor(),
      blockLeft3: this.randomBlockLeft(),
      blockColor3: this.randomBlockColor(),
      blockLeft4: this.randomBlockLeft(),
      blockColor4: this.randomBlockColor(),
      blockLeft5: this.randomBlockLeft(),
      blockColor5: this.randomBlockColor(),
    };
  }
  
  componentDidMount(){
    Accelerometer.addListener(data => {this.setState(
      {movementX: data.x * 500}); 
    });
    
    counter = 1;
  }

  doLogic() {
    let d = new Date()
    this.setState({
      time: d.getSeconds()
    });

    let second = d.getSeconds();

    if (this.state.time < second) {
      this.state.blockTop1 -= 1;
      
      if (counter >=1 ) {
        this.state.blockTop2 -= 1;
        
        if (counter >=2) {
          this.state.blockTop3 -= 1;
          
          if (counter >=3) {
            this.state.blockTop4 -= 1;
            
            if (counter >=4) {
              this.state.blockTop5 -= 1;

            }
          }
        }
      }
      counter +=1
    }

    if (this.state.blockTop1 <= 0) {
      this.setState({
        blockTop1: 100,
        blockLeft1: this.randomBlockLeft(),
        blockColor1: this.randomBlockColor()
      });
    }

    if (this.state.blockTop2 <= 0) {
      this.setState({
        blockTop2: 100,
        blockLeft2: this.randomBlockLeft(),
        blockColor2: this.randomBlockColor()
      });
    }

    if (this.state.blockTop3 <= 0) {
      this.setState({
        blockTop3: 100,
        blockLeft3: this.randomBlockLeft(),
        blockColor3: this.randomBlockColor()
      });
    }

    if (this.state.blockTop4 <= 0) {
      this.setState({
        blockTop4: 100,
        blockLeft4: this.randomBlockLeft(),
        blockColor4: this.randomBlockColor()
      });
    }

    if (this.state.blockTop5 <= 0) {
      this.setState({
        blockTop5: 100,
        blockLeft5: this.randomBlockLeft(),
        blockColor5: this.randomBlockColor()
      });
    }

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
      80,
      90
    ];
    var index = Math.floor(Math.random() * leftArray.length);
    return leftArray[index];
  }

  render() {
    return (
      <GameLoop style={styles.container} onUpdate={this.doLogic()}>

        <View style={[styles.ball, { left: this.state.movementX}]} />
        <View style={[styles.block, {top: `${this.state.blockTop1}%`, left: `${this.state.blockLeft1}%`, backgroundColor: `${this.state.blockColor1}`}]}/>
        <View style={[styles.block, {top: `${this.state.blockTop2}%`, left: `${this.state.blockLeft2}%`, backgroundColor: `${this.state.blockColor2}`}]}/>
        <View style={[styles.block, {top: `${this.state.blockTop3}%`, left: `${this.state.blockLeft3}%`, backgroundColor: `${this.state.blockColor3}`}]}/>
        <View style={[styles.block, {top: `${this.state.blockTop4}%`, left: `${this.state.blockLeft4}%`, backgroundColor: `${this.state.blockColor4}`}]}/>
        <View style={[styles.block, {top: `${this.state.blockTop5}%`, left: `${this.state.blockLeft5}%`, backgroundColor: `${this.state.blockColor5}`}]}/>

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