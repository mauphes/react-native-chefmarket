import React, { Component } from 'react';
import { StyleSheet, ScrollView, Image } from 'react-native';
import { Header } from '../';

class DiscountScreen extends Component {
  static navigationOptions = {
    header: (props) => <Header left="menu" title="Скидка 10%" {...props} />,
  };
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={require('./discount.png')} style={{ marginTop: -65 }} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});

export default DiscountScreen;