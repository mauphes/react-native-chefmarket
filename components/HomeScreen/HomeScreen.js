import React, { Component, PureComponent } from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { Header, CustomText } from '../';

const data = [
  {
    id: '1',
    title: 'На неделю',
    img: {
      source: require('./img/box.png'),
      style: {
        width: 60,
        height: 58,
      }
    },
    toScreen: 'Dinners',
    text: 'Меню из нескольких блюд, доставляется раз в неделю',
  },
  {
    id: '2',
    title: 'На выбор',
    img: {
      source: require('./img/menu.png'),
      style: {
        width: 48,
        height: 60,
      }
    },
    toScreen: 'Products',
    text: 'Каталог рецептов для тех, кто любит составлять своё меню сам',
  },
  {
    id: '3',
    title: `Акции \nи скидки`,
    img: {
      source: require('./img/sales.png'),
      style: {
        width: 60,
        height: 60,
      }
    },
    toScreen: 'Sales',
    text: ''
  },
];

class HomeScreen extends Component {
  static navigationOptions = {
    header: (props) => <Header left="menu" title="logo" {...props} />,
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        {data.map(({ title, img, text, toScreen }, key) => (
          <View style={[styles.item, (key === 0) ? styles.border : null]} key={key}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => navigate(toScreen)}
              style={styles.link}>
                <View style={styles.img}>
                  <Image {...img} />
                </View>
                <View style={styles.content}>
                  <CustomText style={styles.title} weight="medium">{title}</CustomText>
                  {text ?
                    <CustomText style={{ fontSize: 12 }} weight="light">{text}</CustomText>
                    : null}
                </View>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  item: {
    borderTopWidth: 1,
    borderTopColor: '#EFEFEF',
    flex: 1,
    justifyContent: 'center'
  },
  border: {
    borderTopWidth: 0,
  },
  link: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    lineHeight: 24,
  },
  img: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    flex: 4,
    paddingRight: 20,
    justifyContent: 'center',
  }
});

export default HomeScreen;