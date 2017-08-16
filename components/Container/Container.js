import React, { Component } from "react";
import Drawer from 'react-native-drawer';
import { connect } from "react-redux";
import Navigation from '../Navigation';
import { SideMenu, AddToCart } from '../';
import { openSideMenu, navigateScreen } from "../../actions/userActions";

const Container = ({ openSideMenu, navigateScreen, open }) => {
  return (
    <Drawer
      open={open}
      tapToClose={true}
      onClose={() => openSideMenu(false)}
      openDrawerOffset={60}
      content={<SideMenu openSideMenu={openSideMenu} navigateScreen={navigateScreen} />}>
      <Navigation />
      <AddToCart />
    </Drawer>
  );
};

const mapStateToProps = (state) => ({
  open : state.openSideMenu,
});

export default connect(mapStateToProps, { openSideMenu, navigateScreen })(Container);