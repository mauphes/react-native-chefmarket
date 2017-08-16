import React, { Component, PureComponent } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Header, CustomText } from '../';

class BasketScreen extends Component {
  static navigationOptions = {
    header: (props) => <Header left="back" title="Корзина" {...props} inBasket />,
  };

  render() {
    const { goBack } = this.props.navigation;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => goBack()}
          style={styles.link}>
          <View style={styles.img}>
            <Image source={require('./img/empty-cart.png')} style={{ width: 140, height: 100 }} />
          </View>
          <View style={styles.content}>
            <CustomText style={{ fontSize: 12, textAlign: 'center' }} weight="light">
              Здесь отобразятся добавленные {'\n'} вами товары, и вы сможете {'\n'} оформить заказ
            </CustomText>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  link: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    position: 'absolute',
    top: '50%',
    marginTop: -180
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default BasketScreen;