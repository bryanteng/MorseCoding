/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import Receiver from "./components/Receiver"
import Carousel from "./components/Carousel"

type Props = {};
export default class App extends Component<Props> {
  state={
    show: false
  }

  handleShow=()=>{
    this.setState({show: !this.state.show})
  }
  render() {
    return (
      <View style={styles.container}>
        <Receiver />
        {this.state.show ? 
          <View style={{flex: 1, justifyContent: 'space-evenly'}}><Button title="hide carousel" onPress={this.handleShow}></Button><Carousel /></View> 
        : <Button title="show carousel" onPress={this.handleShow}></Button>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
