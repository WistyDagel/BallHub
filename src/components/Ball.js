import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";

const { height, width } = Dimensions.get('window');

const BODY_DIAMETER = Math.trunc(Math.max(width, height) * 0.05);
const BORDER_WIDTH = Math.trunc(BODY_DIAMETER * 0.1);

export default function Ball({body}) {
  const { position } = body;
  const x = position.x - BODY_DIAMETER / 2;
  const y = position.y - BODY_DIAMETER / 2;
  return (
    <View
      style={[
        styles.ball, {left: x, top: y}
        // { transform: [{ translateX: x }, { translateY: y }] }
      ]}
    />
  );
}

const styles = StyleSheet.create({
  ball: {
    width: BODY_DIAMETER,
    height: BODY_DIAMETER,
    borderRadius: BODY_DIAMETER * 2,
    backgroundColor: "red"
  }
});