import React, { Component } from "react";
import { StyleSheet, Dimensions, View, Image } from "react-native";
import { Accelerometer } from "expo-sensors"

const { width, height} = Dimensions.get("window");

export default class Racer extends Component {
  constructor() {
      super();
      this.state = {};
  }

  componentDidMount(){
    Accelerometer.addListener(item => {this.setState(
      {movement: item.x * 1000});
    });
  }

  render() {
    return (
        <View style={styles.container}>
            <Image source={require('./images/road.gif')} style={styles.raceway}/>
            <Image source={require('./images/car.png')} style={{marginTop: 200, width: 70, height: 50, flex: 1, position: 'absolute', left: this.state.movement}}/>
        </View>
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
    raceway: {
        width: width, 
        height: height * 0.3
    }
});