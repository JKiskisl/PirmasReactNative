import React, { Component } from "react";
import { StyleSheet, View, Text, Platform, Button, TouchableOpacity, TouchableHighlight } from "react-native";
import CupertinoButtonGrey from "./components/CupertinoButtonGrey";
import CupertinoButtonGrey1 from "./components/CupertinoButtonGrey1";
import CupertinoButtonGrey2 from "./components/CupertinoButtonGrey2";
import CupertinoButtonGrey3 from "./components/CupertinoButtonGrey3";
class App extends Component {

  constructor(){
    super()
    this.state = {
      buttonEnabled: true,
      button1Enabled: true,
      button2Enabled: true,
      button3Enabled: true,
    }
  }

  changeColor = (selected) => {
    selected.setState({[selected]: !this.state[selected]})
  }

  render(){


    return (
      <View style={styles.container}>
        <View style={styles.rect1}>
          <Text style={this.state.buttonEnabled? styles.text1 : styles.text1Colored}>Text1</Text>
          <Text style={this.state.button1Enabled? styles.text2 : styles.text2Colored}>Text2</Text>
          <Text style={this.state.button2Enabled? styles.text3 : styles.text3Colored}>Text3</Text>
          <Text style={this.state.button3Enabled? styles.text4 : styles.text4Colored}>Text4</Text>
        </View>
        <View style={styles.rect}>
          <View style={styles.cupertinoButtonGreyRow}>
            <CupertinoButtonGrey
              style={styles.cupertinoButtonGrey} onPress={() => {
                this.setState({buttonEnabled: !this.state.buttonEnabled})
              }} disabled={!this.state.buttonEnabled}>
            </CupertinoButtonGrey>
            <CupertinoButtonGrey1
              style={styles.cupertinoButtonGrey1} onPress={() => {
                this.setState({button1Enabled: !this.state.button1Enabled})
              }} disabled={!this.state.button1Enabled}>
              </CupertinoButtonGrey1>
          </View>
          <View style={styles.cupertinoButtonGrey2Row}>
            <CupertinoButtonGrey2
              style={styles.cupertinoButtonGrey2} onPress={() => {
                this.setState({button2Enabled: !this.state.button2Enabled})
              }} disabled={!this.state.button2Enabled}>
              </CupertinoButtonGrey2>
            <CupertinoButtonGrey3
              style={styles.cupertinoButtonGrey3} onPress={() => {
                this.setState({button3Enabled: !this.state.button3Enabled})
              }} disabled={!this.state.button3Enabled}>
              </CupertinoButtonGrey3>
          </View>
        </View>
      </View>
    );
  }

  }
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(15,15, 15,0)"
  },
  rect1: {
    width: 510,
    height: 417,
    backgroundColor: "rgba(191,101,194,1)",
    alignItems: "flex-end",
    marginTop: 417
  },
  text1: {
    color: "#121212",
    fontSize: 22,
    alignSelf: "flex-start",
    marginTop: 19,
    marginLeft: 161
  },
  text2: {
    color: "#121212",
    fontSize: 22,
    marginTop: 27,
    marginRight: 295
  },
  text3: {
    color: "#121212",
    fontSize: 22,
    marginTop: 30,
    marginRight: 295
  },
  text4: {
    color: "#121212",
    fontSize: 22,
    marginTop: 28,
    marginRight: 295
  },
  rect: {
    width: 467,
    height: 417,
    backgroundColor: "rgba(43,62,115,1)",
    marginTop: -834
  },
  cupertinoButtonGrey: {
    height: 44,
    width: 100
  },
  cupertinoButtonGrey1: {
    height: 44,
    width: 100,
    marginLeft: 64
  },
  cupertinoButtonGreyRow: {
    height: 44,
    flexDirection: "row",
    marginTop: 157,
    marginLeft: 54,
    marginRight: 149
  },
  cupertinoButtonGrey2: {
    height: 44,
    width: 100
  },
  cupertinoButtonGrey3: {
    height: 44,
    width: 100,
    marginLeft: 64
  },
  cupertinoButtonGrey2Row: {
    height: 44,
    flexDirection: "row",
    marginTop: 72,
    marginLeft: 54,
    marginRight: 149
  },
  text1Colored: {
    color: 'green',
    fontSize: 22,
    alignSelf: "flex-start",
    marginTop: 19,
    marginLeft: 161
  },
  text2Colored: {
    color: 'green',
    fontSize: 22,
    marginTop: 27,
    marginRight: 295
  },
  text3Colored: {
    color: 'green',
    fontSize: 22,
    marginTop: 30,
    marginRight: 295
  },
  text4Colored: {
    color: 'green',
    fontSize: 22,
    marginTop: 28,
    marginRight: 295
  },
});

export default App;
