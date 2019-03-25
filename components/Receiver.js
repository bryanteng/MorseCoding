import React, { Component } from 'react';
import {Text, View, TextInput, StyleSheet, Platform, Button} from 'react-native';
import Torch from 'react-native-torch';

export default class Receiver extends Component {

    state={
        text:"",
        translated:"",
        backgroundColor: "#F5FCFF"
      }

    handleOnChange = (event) =>{
      this.setState({text: event, translated:wordToMorseCode(event.trim())})
    }

    handleButtonClick = () =>{
      let string = this.state.translated
      let dotDashHash ={
        ".": 1,
        "-": 3,
        " ": 3,
        "/": 1
      }
      let ret=[]
      let offset= 0
          for(char in string){
            if(string[char] == "." || string[char] == "-"){
              for(let i = 0; i < dotDashHash[string[char]]; i++){
                ret.push("blue")
              }
            }else{
              for(let i = 0; i < dotDashHash[string[char]]; i++){
                ret.push("white")
              }
            }
            ret.push("white")
          }
      ret.push("green")
      counter=0
      setInterval(()=> {
        this.setState({backgroundColor: ret[counter]})
        counter++}
        ,1000)
        console.log(ret)
    }
    
    
    render() {
        return (
            <View style={[styles.receiver, {backgroundColor: this.state.backgroundColor}]}> 
                <Text style={styles.text}> Morse Coding</Text>
                <Text style={styles.text}>Enter text to be translated here: </Text>
                <TextInput style={styles.textInput} onChangeText={this.handleOnChange}> </TextInput>
                <Text style={styles.translated}>{this.state.translated}</Text>
                <Button title="X" onPress={this.handleButtonClick}>  </Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textInput: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#E0E0E0',
      fontSize: 15,
      borderRadius: 1,
      borderWidth: 0.5,
      borderColor: '#d6d7da',
    },
    receiver: {
        flex: 1,
        borderRadius: 1,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        alignItems: 'stretch'
    },
    text: {
      fontSize: 25,
      textAlign: 'center',
      margin: 10,
    },
    translated: {
        flex:3,
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
      fontSize: 20,
      alignItems: "stretch"
    }
})

function wordToMorseCode(string){
  let splitPhrase = string.split(" ") 
  let ret = []
  let alphabet_hash = {
    "a" : ".-","b" : "-...","c" : "-.-.","d" : "-..","e" : ".","f" : "..-.","g" : "--.","h" : "....","i" : "..","j" : ".---","k" : "-.-", "l" : ".-..","m" : "--","n" : "-.","o" : "---","p" : ".--.","q" : "--.-","r" : ".-.","s" : "...","t" : "-","u" : "..-","v" : "...-","w" : ".--","x" : "-..-","y" : "-.--","z" : "--..","1" : ".----","2" : "..---","3" : "...--","4" : "....-","5" : ".....","6": "-....","7": "--...","8": "---..","9": "----.","0": "-----"
    }
    for(word in splitPhrase){
      temp = splitPhrase[word].match(/[a-z0-9]/gi)
      temp ? ret.push(temp.map(letter => alphabet_hash[letter.toLowerCase()]).join(" ")) : null
    }
  return ret.join(" / ")
}