import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Header, CustomText } from '../';

class ContactsScreen extends Component {
  static navigationOptions = {
    header: (props) => <Header left="menu" title="Контакты" {...props} />,
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
          <CustomText style={styles.title} weight="medium">Страница контакты</CustomText>
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
    fontSize: 30
  }
});

export default ContactsScreen;