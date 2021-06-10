import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './MyStylesheet';

export default class Touchbutton extends Component {
  // _onPressButton() {
  //   alert('You tapped the button!');
  // }

  // _onLongPressButton() {
  //   alert('You long-pressed the button!');
  // }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={this._onPressButton}
          onLongPress={this._onLongPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>It is button.</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
