import React, { Component } from "react";
import { View, Image, Modal } from "react-native";
import { connect } from "react-redux";
import { getAddedIds, getLoadCart } from "../../reducers";

class AddToCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  componentWillReceiveProps (nextProps) {
    let {addedIds, load} = this.props, {open} = this.state;
    if (!nextProps.load && !load && !open && nextProps.addedIds.length > addedIds.length) {
      this.setState({open : true}, () => {
        setTimeout(() => this.setState({open : false}), 1500)
      })
    }
  }

  render() {
    const { open } = this.state;
    return (
      <Modal
        animationType={"fade"}
        transparent={true}
        visible={open}
        onRequestClose={() => {}}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('./img/popup-added.png')} style={{ width: 260, height: 168 }} />
        </View>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => ({
  addedIds : getAddedIds(state),
  load: getLoadCart(state),
});

export default connect(mapStateToProps)(AddToCart);