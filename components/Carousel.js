import React, { Component } from 'react';
import {Text, View, StyleSheet, Button, TouchableOpacity,TouchableNativeFeedback} from 'react-native';


export default class Carousel extends Component {
    state={
        page: 10,
        mc_array:[[ '0', '-----' ],[ '1', '.----' ],[ '2', '..---' ],[ '3', '...--' ],[ '4', '....-' ],[ '5', '.....' ],[ '6', '-....' ],[ '7', '--...' ],[ '8', '---..' ],[ '9', '----.' ],[ 'A', '.-' ],[ 'B', '-...' ],[ 'C', '-.-.' ],[ 'D', '-..' ],[ 'E', '.' ],[ 'F', '..-.' ],[ 'G', '--.' ],[ 'H', '....' ],[ 'I', '..' ],[ 'J', '.---' ],[ 'K', '-.-' ],[ 'L', '.-..' ],[ 'M', '--' ],[ 'N', '-.' ],[ 'O', '---' ],[ 'P', '.--.' ],[ 'Q', '--.-' ], [ 'R', '.-.' ],[ 'S', '...' ],[ 'T', '-' ],[ 'U', '..-' ],[ 'V', '...-' ],[ 'W', '.--' ],[ 'X', '-..-' ],[ 'Y', '-.--' ],[ 'Z', '--..' ]]
    }

    handleRightClick=()=>{
        let index = this.state.page
        if(index == 35){
            index = 0
        }else{ index += 1}
        this.setState({page: index})
    }

    handleLeftClick=()=>{
        let index = this.state.page
        if(index == 0){
            index = 35
        }else{ index -= 1}
        this.setState({page: index})
    }
    render() {
        return (
            <View >
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                }}>
                    <View style={styles.leftButton}>
                        <TouchableOpacity onPress={this.handleLeftClick}><Text style={{fontSize: 45 }}>←</Text></TouchableOpacity>
                    </View>
                    <View style={styles.pageStyle}>
                        <Text style={{fontSize: 30 }}>{this.state.mc_array[this.state.page][0]}</Text>
                        <Text style={{fontSize: 30 }}>{this.state.mc_array[this.state.page][1]}</Text>
                    </View>
                    <View style={styles.rightButton}>
                        <TouchableOpacity onPress={this.handleRightClick}><Text style={{fontSize: 45 }}>→</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
var styles = {
    leftButton:{
        alignItems: 'flex-start',
        fontSize: 25
    },
    rightButton:{
        alignItems: 'flex-end'  
    },
    pageStyle: {
      alignItems: 'center'
    }
  }