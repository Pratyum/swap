import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default class NoMoreCards extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View>
                <Text style={styles.noMoreCardsText}>No more cards</Text>
            </View>
        );
    }
}

const styles = StyleSheet.flatten({  noMoreCardsText: {
    fontSize: 22,
  }});