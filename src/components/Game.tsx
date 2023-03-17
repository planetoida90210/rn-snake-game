import * as React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import { Colors } from "../styles/colors";

export default function Game(): JSX.Element {
  const handleGesture = (event: any) => {};

  return (
    <PanGestureHandler>
      <SafeAreaView style={styles.container}></SafeAreaView>
    </PanGestureHandler>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
});
