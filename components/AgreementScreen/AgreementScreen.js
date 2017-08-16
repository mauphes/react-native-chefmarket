import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Header, CustomText } from '../';

class AgreementScreen extends Component {
  static navigationOptions = {
    header: (props) => <Header left="menu" title="Пользовательское соглашение" {...props} />,
  };
  render() {
    const { goBack } = this.props.navigation;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => goBack()}
          style={styles.link}>
          <CustomText>Вернуться назад</CustomText>
          <CustomText style={styles.title} weight="medium">Страница пользовательского соглашения</CustomText>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  link: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    textAlign: 'center'
  }
});

export default AgreementScreen;