import React, { Component } from 'react';
import { StyleSheet, ScrollView, Image } from 'react-native';
import { Header } from '../';

class DinnersScreen extends Component {
  static navigationOptions = {
    header: (props) => <Header left="menu" title="На неделю" {...props} />,
  };
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={require('./dinners.png')} style={{ marginTop: -65 }} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  }
});

export default DinnersScreen;