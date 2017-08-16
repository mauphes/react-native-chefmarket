import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Font } from 'expo';

class CustomText extends Component {
  async componentDidMount() {
    await Font.loadAsync({
      'fira': require('../../assets/fonts/fira-sans.regular.ttf'),
      'fira_medium': require('../../assets/fonts/fira-sans.medium.ttf'),
      'fira_italic': require('../../assets/fonts/fira-sans.italic.ttf'),
      'fira_light': require('../../assets/fonts/fira-sans.light.ttf'),
      'fira_bold': require('../../assets/fonts/fira-sans.bold.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  state = {
    fontLoaded: false,
  };

  render() {
    const { children, style, weight } = this.props;
    return this.state.fontLoaded &&
      <Text
        {...this.props}
        style={[style, { fontFamily: weight ? `fira_${weight}` : 'fira' }]}>
          {children}
      </Text>;
  }
}

export default CustomText;