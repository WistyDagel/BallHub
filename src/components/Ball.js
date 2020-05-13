import React from "react";
import { StyleSheet, View } from "react-native";

export const BALL_SIZE = 50;
export default function Ball() {
  return (
    <View
      style={[
        styles.ball
      ]}
    />
  );
}

const styles = StyleSheet.create({
  ball: {
    width: BALL_SIZE,
    height: BALL_SIZE,
    borderRadius: BALL_SIZE / 2,
    backgroundColor: "red"
  }
});