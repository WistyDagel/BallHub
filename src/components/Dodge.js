import React, { PureComponent } from "react";
import { Text, AppRegistry, StyleSheet, Dimensions, View } from "react-native";
import {Accelerometer} from "expo-sensors";
import { GameLoop } from "react-native-game-engine";

import { keepInBoundsX, collideBlock } from './Collision';

const { width, height } = Dimensions.get("window");
const RADIUS = 30;

var ballCenterX = 0;
var ballCenterY = 0;
var blockLeft = 0;
var blockTop = 0;

const blockWidth = 30;
const blockHeight = 80;

let ballColor = "blue";

var counter = 1;

export default class Dodge extends PureComponent {
  constructor() {
    super();
    this.state = {
      x: width / 2 - RADIUS,
      y: height / 2 - RADIUS,
      ballTop: 10,
      ballX: 10,
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
      // blockTop: 100,
      // blockLeft: this.randomBlockLeft(),
      // blockColors: this.randomBlockColor()
    };
  }

  EnemyBlock = () => {
    return(
      <View style={[styles.block, {top: `${this.state.blockTop}%`, left: `${this.state.blockLeft}%`, backgroundColor: `${this.state.blockColors}`}]}/>
    )
  }

  componentDidMount(){
    // console.log(this.randomBlockLeft);
    
    Accelerometer.addListener(data => {
      // Move ball with accelerometer data
      this.setState({ballX: Math.floor(data.x * 500)});
    });

    counter = 1;
  }
  

  gameLogic() {
    let d = new Date()
    this.setState({
      time: d.getSeconds()
    });

    let mili = d.getMilliseconds()
    // let second = d.getSeconds();

    if (this.state.time < mili) {
      this.state.blockTop1 -= 3;
      
      if (counter >= 10) {
        this.state.blockTop2 -= 3;
        
        if (counter >= 20) {
          this.state.blockTop3 -= 3;
          
          if (counter >= 30) {
            this.state.blockTop4 -= 3;
            
            if (counter >= 40) {
              this.state.blockTop5 -= 3;
            }
          }
        }
      }
      counter +=1
    }

    if (this.state.blockTop1 <= -80) {
      this.setState({
        blockTop1: 100,
        blockLeft1: this.randomBlockLeft(),
        blockColor1: this.randomBlockColor()
      });
    }

    if (this.state.blockTop2 <= -80) {
      this.setState({
        blockTop2: 100,
        blockLeft2: this.randomBlockLeft(),
        blockColor2: this.randomBlockColor()
      });
    }

    if (this.state.blockTop3 <= -80) {
      this.setState({
        blockTop3: 100,
        blockLeft3: this.randomBlockLeft(),
        blockColor3: this.randomBlockColor()
      });
    }

    if (this.state.blockTop4 <= -80) {
      this.setState({
        blockTop4: 100,
        blockLeft4: this.randomBlockLeft(),
        blockColor4: this.randomBlockColor()
      });
    }

    if (this.state.blockTop5 <= -80) {
      this.setState({
        blockTop5: 100,
        blockLeft5: this.randomBlockLeft(),
        blockColor5: this.randomBlockColor()
      });
    }

    // TODO Jeff's crappy collision code :)
    // console.log(`${keepInBoundsX(this.state.ballX, this.state.ballX + (RADIUS * 2), width)} : ${this.state.ballX}`);
    this.state.ballX = keepInBoundsX(this.state.ballX, this.state.ballX + (RADIUS * 2), 10, width - 10);

    ballCenterX = this.state.ballX + RADIUS;
    ballCenterY = this.state.ballTop + RADIUS;

    blockLeft = Math.round((this.state.blockLeft1 / 100) * width);
    blockTop = Math.round((this.state.blockTop1 / 100) * height);
    
    if (collideBlock(ballCenterX, ballCenterY, RADIUS, (this.state.blockLeft1 / 100) * width, (this.state.blockTop1 / 100) * height, blockWidth, blockHeight) ||
        collideBlock(ballCenterX, ballCenterY, RADIUS, (this.state.blockLeft2 / 100) * width, (this.state.blockTop2 / 100) * height, blockWidth, blockHeight) ||
        collideBlock(ballCenterX, ballCenterY, RADIUS, (this.state.blockLeft3 / 100) * width, (this.state.blockTop3 / 100) * height, blockWidth, blockHeight) ||
        collideBlock(ballCenterX, ballCenterY, RADIUS, (this.state.blockLeft4 / 100) * width, (this.state.blockTop4 / 100) * height, blockWidth, blockHeight) ||
        collideBlock(ballCenterX, ballCenterY, RADIUS, (this.state.blockLeft5 / 100) * width, (this.state.blockTop5 / 100) * height, blockWidth, blockHeight)) {
      ballColor = "red";
    } else {
      ballColor = "blue";
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
      0,
      10,
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

    let enemyBlocks = [];  
    let d = new Date()
    this.setState({
      time: d.getSeconds()
    });
    let second = d.getSeconds();

    for (let i = 0; i < 1; i++) {
      enemyBlocks.push(<this.EnemyBlock key={i}/>);
    }

    // collideBlock(ballCenterX, ballCenterY, RADIUS, this.state.blockLeft1, this.state.blockTop1, blockWidth, blockHeight
    
    // console.log(enemyBlocks.length);
    
    // <View style={[styles.block, {top: `${this.state.blockTop1}%`, left: `${this.state.blockLeft1}%`, backgroundColor: `${this.state.blockColor1}`}]}/>
    return (
      <GameLoop style={styles.container} onUpdate={this.gameLogic()}>

        <View style={[styles.ball, {top: this.state.ballTop, left: this.state.ballX, backgroundColor: ballColor}]} />
        
        <View style={[styles.ballEdge, { left: this.state.ballX}]} />
        
        <View style={[styles.block, {top: `${this.state.blockTop1}%`, left: `${this.state.blockLeft1}%`, backgroundColor: "white"}]}/>
        <View style={[styles.block, {top: `${this.state.blockTop2}%`, left: `${this.state.blockLeft2}%`, backgroundColor: `${this.state.blockColor2}`}]}/>
        <View style={[styles.block, {top: `${this.state.blockTop3}%`, left: `${this.state.blockLeft3}%`, backgroundColor: `${this.state.blockColor3}`}]}/>
        <View style={[styles.block, {top: `${this.state.blockTop4}%`, left: `${this.state.blockLeft4}%`, backgroundColor: `${this.state.blockColor4}`}]}/>
        <View style={[styles.block, {top: `${this.state.blockTop5}%`, left: `${this.state.blockLeft5}%`, backgroundColor: `${this.state.blockColor5}`}]}/>

        {/* Create an array of View elements containing blocks, append to the array over a set interval of time  */}
        <Text style={[styles.text], {left: "5%", top: "92%", fontSize: 24, color: "#fff"}}>{this.state.time}</Text>
        {/* {enemyBlocks} */}
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
    // backgroundColor: "red",
    width: RADIUS * 2,
    height: RADIUS * 2,
    borderRadius: RADIUS * 2
  },
  block: {
    width: blockWidth,
    height: blockHeight,
    position: 'absolute'
  },
  text: {
    fontSize: 24,
    color: "#fff"
  }
});

const testStyles = StyleSheet.create({
  dot: {
    backgroundColor: "lime",
    width: 1,
    height: 1
  }
});