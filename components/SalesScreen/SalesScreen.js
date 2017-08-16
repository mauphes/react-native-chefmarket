import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Header, CustomText } from '../';

class SalesScreen extends Component {
  static navigationOptions = {
    header: (props) => <Header left='menu' title="Акции" {...props} />,
  };

  render() {
    const { goBack } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text onPress={() => goBack()}>Вернуться назад</Text>
        <CustomText style={styles.title} weight="medium">Акции и скидки</CustomText>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30
  }
});

export default SalesScreen;