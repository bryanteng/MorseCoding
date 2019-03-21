import React, { Component } from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';

export default class Receiver extends Component {

    state={
        text:"",
        translated:""
      }

    handleOnChange = (event) =>{
        this.setState({text: event, translated:wordToMorseCode(event)})
    }

    render() {
        return (
            <View>
                <Text> Receiver component</Text>
                <Text>Enter Text to be translated here: </Text>
                <TextInput style={styles.container} onChangeText={this.handleOnChange}> </TextInput>
                <Text>{this.state.translated}</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
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
    }
})

function wordToMorseCode(string){
    alphabet_hash = {
    "a" : ".-","b" : "-...","c" : "-.-.","d" : "-..","e" : ".","f" : "..-.","g" : "--.","h" : "....","i" : "..","j" : ".---","k" : "-.-", "l" : ".-..","m" : "--","n" : "-.","o" : "---","p" : ".--.","q" : "--.-","r" : ".-.","s" : "...","t" : "-","u" : "..-","v" : "...-","w" : ".--","x" : "-..-","y" : "-.--","z" : "--..","1" : ".----","2" : "..---","3" : "...--","4" : "....-","5" : ".....","6": "-....","7": "--...","8": "---..","9": "----.","0": "-----"
    }
return string.split(" ").map(word=> word.split("").map(letter => alphabet_hash[letter.toLowerCase()]).join("  ")).join(" / ")
}


