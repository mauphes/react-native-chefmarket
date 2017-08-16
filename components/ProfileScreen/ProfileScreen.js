import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { ImageFull, Header } from '../';

class ProfileScreen extends Component {
  static navigationOptions = {
    header: (props) => <Header left="menu" title="Личный кабинет" {...props} />,
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <ImageFull imageURL={'https://images.chefmarket.ru/files/product_description/image2/e49a2220f2b5931cc6e99b2852e05827.jpg'} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  }
});

export default ProfileScreen;