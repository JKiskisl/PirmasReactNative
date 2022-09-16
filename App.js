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

  changeColor = () =>{
    this.setState(previousState => {
      return {button1Enabled: !previousState.button1Enabled}
    });
  };

  render(){

    const text1Color = this.state.buttonEnabled? 'red' : 'blue'
    const text2Color = this.state.button1Enabled? 'red' : 'blue'
    const text3Color = this.state.button2Enabled? 'red' : 'blue'
    const text4Color = this.state.button3Enabled? 'red' : 'blue'

    return (
      <View style={styles.container}>
        <View style={styles.rect1}>
          <Text style={styles.text1}>{this.state.buttonEnabled?"Labas":"krabas"}</Text>
          <Text style={styles.text2}>Text2</Text>
          <Text style={styles.text3}>Text3</Text>
          <Text style={styles.text4}>Text4</Text>
        </View>
        <View style={styles.rect}>
          <View style={styles.cupertinoButtonGreyRow}>
            <CupertinoButtonGrey
              style={styles.cupertinoButtonGrey} onPress={() => {
                this.setState({buttonEnabled: false})
              }} disabled={!this.state.buttonEnabled}>
            </CupertinoButtonGrey>
            <CupertinoButtonGrey1
              style={styles.cupertinoButtonGrey1}
            ></CupertinoButtonGrey1>
          </View>
          <View style={styles.cupertinoButtonGrey2Row}>
            <CupertinoButtonGrey2
              style={styles.cupertinoButtonGrey2}
            ></CupertinoButtonGrey2>
            <CupertinoButtonGrey3
              style={styles.cupertinoButtonGrey3}
            ></CupertinoButtonGrey3>
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
  text1Pressed: {
    color: "#FF0000",
    fontSize: 22,
    marginTop: 30,
    marginRight: 295
  },
});

export default App;
