import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const CupertinoButtonGrey1 = (props) => {
  return (
    <TouchableOpacity style={[styles.container, props.style]}
    onPress={() => props.onPress()}>
      <Text style={styles.button1}>Button1</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#8E8E93",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
    paddingLeft: 16,
    paddingRight: 16
  },
  button2: {
    color: "#fff",
    fontSize: 17
  }
});

export default CupertinoButtonGrey1;
