import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { CustomText } from '../';

// const user = {
//   firstName: 'Константин',
//   lastName: 'Иванов'
// };

const user = null;

const menu = [
  {
    title: user ? `${user.firstName} ${user.lastName}` : 'Вход / Регистрация',
    img: {
      source: user ? require('./img/avatar_cap.png') : require('./img/user_cap.png'),
      style: {
        width: 32,
        height: 32,
      }
    },
    toScreen: 'Profile',
  },
  {
    isSeparator: true
  },
  {
    title: 'Меню на неделю',
    img: {
      source: require('./img/menu.png'),
      style: {
        width: 22,
        height: 27,
      }
    },
    toScreen: 'Dinners',
  },
  {
    title: `Меню на выбор`,
    img: {
      source: require('./img/box.png'),
      style: {
        width: 26,
        height: 26,
      }
    },
    toScreen: 'Products',
  },
  user ? {
    title: `Подписка`,
    img: {
      source: require('./img/subscribe.png'),
      style: {
        width: 29,
        height: 29,
      }
    },
    toScreen: 'Subscribe',
  } : {
    title: `Скидка 10%`,
    img: {
      source: require('./img/discount.png'),
      style: {
        width: 29,
        height: 29,
      }
    },
    toScreen: 'Discount',
  },
  {
    title: `Напишите нам`,
    img: {
      source: require('./img/callback.png'),
      style: {
        width: 28,
        height: 23,
      }
    },
    toScreen: 'Callback',
  },
  {
    title: `Пригласить друга`,
    img: {
      source: require('./img/referral.png'),
      style: {
        width: 24,
        height: 28,
      }
    },
    toScreen: 'Referral',
  },
  {
    isSeparator: true
  },
  {
    title: `Доставка`,
    subMenu: true,
    toScreen: 'Delivery',
  },
  {
    title: `Оплата`,
    subMenu: true,
    toScreen: 'Payment',
  },
  {
    title: `Частые вопросы`,
    subMenu: true,
    toScreen: 'FAQ',
  },
  {
    title: `Отзывы`,
    subMenu: true,
    toScreen: 'Reviews',
  },
  {
    title: `Контакты`,
    subMenu: true,
    toScreen: 'Contacts',
  },
  // {
  //   title: `Реквизиты`,
  //   subMenu: true,
  //   toScreen: 'Requisites',
  // },
  {
    title: `Пользовательское соглашение`,
    subMenu: true,
    toScreen: 'Agreement',
  },
];

class SideMenu extends Component {
  changeScreen = screen => {
    const { openSideMenu, navigateScreen } = this.props;
    openSideMenu(false);
    navigateScreen(screen);
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <ScrollView  contentContainerStyle={styles.container}>
          {menu.map(({ title, img, toScreen, subMenu, isSeparator }, key) => (
            isSeparator ?
              <View style={styles.wrap} key={key}>
                <View style={styles.separator} />
              </View>
              :
              <View style={[styles.item, subMenu ? styles.small_item : null]} key={key}>
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={this.changeScreen.bind(this, toScreen)}
                  style={styles.link}>
                  {img ? <View style={styles.img}>
                    <Image {...img} />
                  </View> : null}
                  <View style={styles.content}>
                    <CustomText numberOfLines={1} style={[styles.title, subMenu ? styles.small : null ]}>{title}</CustomText>
                  </View>
                </TouchableOpacity>
              </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#87CB24',
  },
  container: {
    paddingVertical: 22,
    minHeight: '100%',
  },
  item: {
    flex: 1,
    paddingVertical: 12,
    justifyContent: 'center'
  },
  small_item: {
    paddingVertical: 14,
  },
  wrap: {
    paddingHorizontal: 20,
    paddingTop: 5,
    paddingBottom: 15,
  },
  separator: {
    height: 1,
    backgroundColor: 'rgba(255,255,255,.2)',
  },
  link: {
    flex: 1,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  img: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  content: {
    flex: 4,
    paddingRight: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    color: '#fff',
  },
  small: {
    fontSize: 15,
  }
});

export default SideMenu;