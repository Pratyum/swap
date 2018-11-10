import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default class Card extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View style={[styles.card, {backgroundColor: this.props.backgroundColor}]}>
                
                <Text style={styles.text}>{this.props.text}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.flatten({card: {
    alignItems: 'center',
    borderRadius: 5,
    overflow: 'hidden',
    borderColor: 'grey',
    backgroundColor: 'white',
    borderWidth: 1,
    elevation: 1,
    width:350,
    height:650
  },
  text:{
     fontSize:40 
  }
});