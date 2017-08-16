import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { Header, ImageFull, CustomText } from '../';

class ReferralScreen extends Component {
  static navigationOptions = {
    header: (props) => <Header left="back" title="Пригласить друга" {...props} />,
  };

  constructor(props) {
    super(props);
    this.savePromo = this.savePromo.bind(this);
    this.state = {
      isEditable: false,
      promo: 'GF82HI2' || '',
    };
  }

  savePromo() {
    this.setState({ isEditable: false })
  }

  render() {
    const { isEditable, promo } = this.state;
    return (
      <View style={styles.wrapper}>
        <ScrollView contentContainerStyle={styles.container}>
          <View>
            <ImageFull imageURL={'http://i.imgur.com/RRobqov.jpg'} />
            <CustomText style={styles.name} weight="medium">Получите от нас 500 руб. за каждого приведенного друга!</CustomText>
            <View style={styles.shadow}>
              <Image source={require('../ProductItem/img/shadow.png')} />
            </View>
          </View>
          <View>
            <View style={{ backgroundColor: isEditable ? '#fff' : 'transparent', flex: 1, flexDirection: 'row', height: 50, paddingVertical: 7 }}>
              <View style={{ flex: 8, paddingHorizontal: 15 }}>
                <CustomText style={{ fontSize: 11, color: '#B3B3B3' }}>
                  Ваш код
                </CustomText>
                <TextInput style={{ height: 22 }} value={promo} underlineColorAndroid="transparent" editable={isEditable} />
              </View>
              <View style={{ flex: 2, flexDirection: 'row', paddingHorizontal: 15 }}>
                {isEditable ? (
                  <TouchableOpacity
                    activeOpacity={1}
                    style={styles.promoBtn}
                    onPress={this.savePromo}>
                    <Image source={require('./img/enter.png')} style={{ width: 20, height: 20 }} />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    activeOpacity={1}
                    style={styles.promoBtn}
                    onPress={() => this.setState({ isEditable: true })}>
                    <Image source={require('./img/edit.png')} style={{ width: 20, height: 20 }} />
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>
          <View style={{ borderTopWidth: 1, borderTopColor: '#EFEFEF', paddingVertical: 15, paddingHorizontal: 15 }}>
            <CustomText style={{ fontSize: 15 }}>
              По этому коду ваши друзья получат скидку 500 рублей на первый заказ
            </CustomText>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', borderTopWidth: 1, borderTopColor: '#EFEFEF', paddingVertical: 7, paddingHorizontal: 15, height: 58 }}>
            <Image source={require('./img/coins.png')} style={{ width: 30, height: 30, marginRight: 15 }} />
            <View>
              <CustomText style={{ fontSize: 11, color: '#B3B3B3' }}>
                Ваши бонусные рубли
              </CustomText>
              <CustomText style={{ fontSize: 25 }} weight="bold">
                500
              </CustomText>
            </View>
          </View>
          <View style={{ borderTopWidth: 1, borderTopColor: '#EFEFEF', paddingVertical: 15, paddingHorizontal: 15 }}>
            <CustomText style={{ fontSize: 15 }} weight="medium">
              История
            </CustomText>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  container: {
    minHeight: '100%',
  },
  name: {
    position: 'absolute',
    zIndex: 1,
    bottom: 0,
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: 'transparent',
    fontSize: 25,
    color: '#fff',
  },
  shadow: {
    position: 'absolute',
    bottom: 0,
  },
  promoBtn: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  }
});

export default ReferralScreen;