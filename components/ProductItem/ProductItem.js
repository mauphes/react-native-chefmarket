import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { connect } from "react-redux";
import ActionSheet from 'react-native-actionsheet';
import { ImageFull, CustomText } from '../';
import { addToCart } from "../../actions/cartActions";

class ProductItem extends Component {
  constructor(props) {
    super(props);
    const { item = {} } = this.props,
      { portions, days } = item;
    this.state = {
      selectPortion: portions[0] || 1,
      selectDays: days[0] || 3
    };
  }

  addToCart() {
    const { addToCart, item } = this.props,
      { selectPortion } = this.state;
    addToCart(item, selectPortion);
  }

  showActionSheet(name) {
    this[name].show()
  }

  changeValue(name, stateName, index) {
    if(index == 0) return false;
    let val = this.props.item[name][index - 1];
    this.setState({ [stateName]: val })
  }

  render() {
    const { item } = this.props,
      { title, image, portions = [], price, days } = item,
      { selectPortion, selectDays } = this.state;
    return (
      <View style={{ marginBottom: 5, borderBottomColor: '#EFEFEF', borderBottomWidth: 1 }}>
        <View>
          <ImageFull imageURL={image} />
          <CustomText style={styles.name}>{title}</CustomText>
          <View style={styles.shadow}>
            <Image source={require('./img/shadow.png')} />
          </View>
        </View>
        <View style={styles.priceBlock}>
          <View style={{ borderRightWidth: 1, borderRightColor: '#EFEFEF', flex: 4, justifyContent: 'center' }}>
            <CustomText style={styles.price} weight="medium">{price} Р</CustomText>
          </View>
          <TouchableOpacity onPress={this.showActionSheet.bind(this, 'ActionSheetPortions')} activeOpacity={1} style={{ flex: 5, flexDirection: 'row', borderRightWidth: 1, borderRightColor: '#EFEFEF', paddingHorizontal: 10 }}>
            <View style={{ flex: 5, justifyContent: 'center' }}>
              <CustomText style={{ fontSize: 12, color: '#B3B3B3' }}>Порций</CustomText>
            </View>
            <View style={{ flex: 2, justifyContent: 'center' }}>
              <CustomText style={{ fontSize: 15, color: '#000', textAlign: 'center' }} weight="medium">{selectPortion}</CustomText>
            </View>
            <View style={{ flex: 2, height: 40, justifyContent: 'center', alignItems: 'center' }}>
              <Image source={require('./img/arrow_bottom.png')} style={{ width: 14, height: 9 }} />
            </View>
            <ActionSheet
              ref={o => this.ActionSheetPortions = o}
              title='Количество порций:'
              cancelButtonIndex={0}
              options={['Отмена', ...portions]}
              tintColor="#87CB24"
              onPress={this.changeValue.bind(this, 'portions', 'selectPortion')}
            />
          </TouchableOpacity>
          {!!days ? <TouchableOpacity onPress={this.showActionSheet.bind(this, 'ActionSheetDays')} activeOpacity={1} style={{ flex: 4, flexDirection: 'row', borderRightWidth: 1, borderRightColor: '#EFEFEF', paddingHorizontal: 10 }}>
            <View style={{ flex: 5, justifyContent: 'center' }}>
              <CustomText style={{ fontSize: 12, color: '#B3B3B3' }}>Дней</CustomText>
            </View>
            <View style={{ flex: 2, justifyContent: 'center' }}>
              <CustomText style={{ fontSize: 15, color: '#000', textAlign: 'center' }} weight="medium">{selectDays}</CustomText>
            </View>
            <View style={{ flex: 2, height: 40, justifyContent: 'center', alignItems: 'center' }}>
              <Image source={require('./img/arrow_bottom.png')} style={{ width: 14, height: 9 }} />
            </View>
            <ActionSheet
              ref={o => this.ActionSheetDays = o}
              title='Количество дней:'
              cancelButtonIndex={0}
              options={['Отмена', ...days]}
              tintColor="#87CB24"
              onPress={this.changeValue.bind(this, 'days', 'selectDays')}
            />
          </TouchableOpacity> : null}
          <TouchableOpacity
            activeOpacity={1}
            onPress={this.addToCart.bind(this)}
            style={styles.toCart}>
            <View style={styles.img}>
              <Image source={require('./img/toCart.png')} style={{ width: 50, height: 40 }} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  name: {
    position: 'absolute',
    zIndex: 1,
    bottom: 0,
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: 'transparent',
    fontSize: 15,
    color: '#fff',
  },
  priceBlock: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    height: 40,
    backgroundColor: '#fff'
  },
  price: {
    fontSize: 15,
    color: '#87CB24',
    alignSelf: 'flex-start',
    paddingLeft: 15,
    paddingRight: 5,
    textAlignVertical: 'center'
  },
  toCart: {
    alignSelf: 'flex-end',
    width: 50,
  },
  shadow: {
    position: 'absolute',
    bottom: 0,
  }
});

export default connect(null, { addToCart })(ProductItem);