import React, { Component } from "react";
import { connect } from "react-redux";
import { StackNavigator } from 'react-navigation';
import { addNavigationHelpers } from 'react-navigation';
import { config as appConfig } from '../config';
import { HomeScreen,
  ProductsScreen,
  DinnersScreen,
  SalesScreen,
  BasketScreen,
  ProfileScreen,
  SubscribeScreen,
  DiscountScreen,
  CallbackScreen,
  ReferralScreen,
  DeliveryScreen,
  PaymentScreen,
  FAQScreen,
  ReviewsScreen,
  ContactsScreen,
  AgreementScreen,
} from '../';

const root = {
  Home: { screen: HomeScreen },
  Products: { screen: ProductsScreen },
  Dinners: { screen: DinnersScreen },
  Sales: { screen: SalesScreen },
  Basket: { screen: BasketScreen },
  Profile: { screen: ProfileScreen },
  Subscribe: { screen: SubscribeScreen },
  Discount: { screen: DiscountScreen },
  Callback: { screen: CallbackScreen },
  Referral: { screen: ReferralScreen },
  Delivery: { screen: DeliveryScreen },
  Payment: { screen: PaymentScreen },
  FAQ: { screen: FAQScreen },
  Reviews: { screen: ReviewsScreen },
  Contacts: { screen: ContactsScreen },
  Agreement: { screen: AgreementScreen },
};

const config = {
  initialRouteName: appConfig.initialRouteName,
  headerMode: 'screen',
  cardStyle: {
    backgroundColor: 'white',
    elevation: 0,
    shadowOpacity: 0
  },
};

export const AppNavigator = StackNavigator(root, config);

const Navigation = ({ dispatch, navigation }) => {
  return (
    <AppNavigator navigation={addNavigationHelpers({
      dispatch,
      state: navigation
    })} />
  );
};


const mapStateToProps = (state) => ({
  navigation: state.navigation
});

export default connect(mapStateToProps)(Navigation);