import React, { Component } from 'react';
import { Text, StyleSheet, View , Button } from 'react-native';
import SwipeCards from 'react-native-swipe-cards';
import Card from '../components/Card';
import NoMoreCards from '../components/NoMoreCards';

export default class BrowsePage extends Component {
    constructor (props) {
        super(props)
        this.state = {
        cards: [
            {text: 'Tomato', backgroundColor: 'red'},
            {text: 'Aubergine', backgroundColor: 'purple'},
            {text: 'Courgette', backgroundColor: 'green'},
            {text: 'Blueberry', backgroundColor: 'blue'},
            {text: 'Umm...', backgroundColor: 'cyan'},
            {text: 'orange', backgroundColor: 'orange'},
        ]
        };
    }
    componentWillReceiveProps = (nextProps) => {
        console.log("NExt Props",nextProps);
        this.setState({cards: nextProps.data});
      }
    
          
    handleYup (card) {
        console.log(`Yup for ${card.text}`)
    }
    handleNope (card) {
        console.log(`Nope for ${card.text}`)
    }
    handleMaybe (card) {
        console.log(`Maybe for ${card.text}`)
    }
    render() {
        // If you want a stack of cards instead of one-per-one view, activate stack mode
        // stack={true}
        return (
        <SwipeCards
            cards={this.state.cards}
            renderCard={(cardData) => <Card {...cardData} />}
            renderNoMoreCards={() => <NoMoreCards />}
            handleYup={this.handleYup}
            handleNope={this.handleNope}
            handleMaybe={this.handleMaybe}
            hasMaybeAction
        />
        )
    }
}

const styles = StyleSheet.flatten({container: {
    flex: 1,
    backgroundColor: '#000'
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent'
  },
  done: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    backgroundColor: 'transparent'
  }
});