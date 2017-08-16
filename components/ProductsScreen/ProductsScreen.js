import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Image, TextInput } from 'react-native';
import { ProductItem, Header } from '../';

class ProductsScreen extends Component {
  static navigationOptions = {
    header: (props) => <Header left="menu" title="Все блюда" {...props} />,
  };
  render() {
    const item = {
      title: 'Горячее предложение',
      price: 990,
      portions: ['4', '8'],
      days: ['3', '5', '7'],
      image: 'https://images.chefmarket.ru/files/product_description/image2/e49a2220f2b5931cc6e99b2852e05827.jpg',
    };
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={{ flex: 1, paddingVertical: 10, paddingHorizontal: 15 }}>
          <View style={{ backgroundColor: '#fff', borderWidth: 1, borderColor: '#E0E0E0', borderRadius: 15, flex: 1, flexDirection: 'row' }}>
            <TextInput style={{ flex: 8, height: 30, paddingHorizontal: 15 }} underlineColorAndroid="transparent" />
            <View style={{ flex: 1, justifyContent: 'center' }}>
              <Image source={require('./img/search.png')} style={{ width: 17, height: 17 }} />
            </View>
          </View>
        </View>
        <ProductItem item={item} />
        <ProductItem item={item} />
        <ProductItem item={item} />
        <ProductItem item={item} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F6F6F6'
  }
});

export default ProductsScreen;