import React, { Component } from 'react';
import { Text, StyleSheet, View ,TouchableHighlight } from 'react-native';

export default class ActionButton extends Component {
    render() {
        return (
            <View style={styles.action}>
                <TouchableHighlight
                underlayColor={styles.actionColor}
                onPress={this.props.onPress}>
                <Text style={styles.actionText}>{this.props.title}</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.flatten({actionText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  action: {
    color:'#24CE84',
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 14,
    paddingBottom: 16,
  },
  actionColor: '#24CE84'
});