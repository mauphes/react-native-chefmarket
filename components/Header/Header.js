import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {connect} from "react-redux";
import { openSideMenu, backScreen, navigateScreen } from "../../actions/userActions";
import { getCartProducts } from "../../reducers";

class Header extends Component {
  render() {
    const { open, openSideMenu, navigation, backScreen, navigateScreen, products, title, left, inBasket } = this.props;
    const { navigate, goBack } = navigation;
    let count = products.length || 0;
    return (
      <View style={styles.header}>
        <View style={{ flex: 3 }}>
          {left === 'menu' ?
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => openSideMenu(!open)}
              style={styles.link}>
              <Image
                style={{ width: 20, height: 14 }}
                source={require('./img/burger.png')}
              />
            </TouchableOpacity>
            : left === 'back' ?
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => backScreen()}
              style={styles.link}>
              <Image
                style={{ width: 12, height: 22 }}
                source={require('./img/back.png')}
              />
            </TouchableOpacity>
            :
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => openSideMenu(!open)}
              style={styles.link}>
              <Image
                style={{ width: 20, height: 14 }}
                source={require('./img/burger.png')}
              />
            </TouchableOpacity>
          }

        </View>
        <View style={{ flex: 6, alignItems: 'center', justifyContent: 'center' }}>
          {title == 'logo' ?
            <Image
              style={{ width: 114, height: 34 }}
              source={require('./img/chef_logo.png')}
            />
            :
            <Text style={{ textAlign: 'center' }}>{title}</Text>
          }
        </View>

        <View style={{ flex: 3, alignItems: 'flex-end' }}>
          {inBasket ? null : <TouchableOpacity
            activeOpacity={1}
            onPress={() => navigateScreen('Basket')}
            style={styles.link}>
            <View>
              <Image
                style={{ width: 26, height: 26 }}
                source={require('./img/cart.png')}
              />
              {!!count ? <View style={styles.cart}>
                <Text style={{ color: '#fff', fontSize: 11 }}>{count}</Text>
              </View> : null}
            </View>
          </TouchableOpacity>}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    height: 74,
    paddingTop: 20,
    paddingBottom: 0,
    shadowOffset:{  width: 0,  height: 1,  },
    shadowColor: 'black',
    shadowOpacity: .3,
    elevation: 2,
  },
  cart: {
    position: 'absolute',
    top: -8,
    right: -6,
    width: 16,
    height: 16,
    backgroundColor: 'red',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  link: {
    height: '100%',
    paddingHorizontal: 20,
    justifyContent: 'center'
  }
});

const mapStateToProps = (state) => ({
  open : state.openSideMenu,
  products: getCartProducts(state),
});

export default connect(mapStateToProps, { openSideMenu, backScreen, navigateScreen, getCartProducts })(Header);