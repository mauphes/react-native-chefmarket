import React, { Component } from 'react';
import { Dimensions, Image } from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';

const { width } = Dimensions.get('window');

export default class ImageFull extends Component {
  render() {
    return <AutoHeightImage {...this.props} width={width} />;
  }
}