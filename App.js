import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { mapping, light as lightTheme } from "@eva-design/eva";
import {
  ApplicationProvider,
  Layout,
  Button,
  Modal,
  BottomNavigation,
  BottomNavigationTab
} from "react-native-ui-kitten";

import TestBar from "./TestBar.js"

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      modalVisible: false,
      selectedIndex: 0
    };
  }

  toggleModal = () => {
    this.setState({
      ...this.state,
      modalVisible: !this.state.modalVisible
    });
  };

  onTabSelect = (selectedIndex) => {
    this.setState({ selectedIndex });
  };

  render() {
    return (
      <ApplicationProvider mapping={mapping} theme={lightTheme}>
        <Layout style={styles.layout}>
          <Text style={styles.text}>HELLO WORLD</Text>
          <View style={styles.imageBox}>
            <Image
              style={styles.image}
              source={require("./assets/discord_duck.png")}
            />
          </View>
          <Button
            size="giant"
            onPress={this.toggleModal}
            style={styles.button}
            children="CLICK ME"
          />
        </Layout>
        <Modal style={styles.modal} visible={this.state.modalVisible} allowBackdrop={false}>
          <View>
            <Text style={styles.modalText}>Yo! You Clicked It!</Text>
          </View>
        </Modal>
        <TestBar />
      </ApplicationProvider>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    aspectRatio: 1
  },
  text: {
    padding: 20
  },
  imageBox: {
    flex: 1,
    margin: 50,
    borderWidth: 10,
    borderColor: "black",
    flexDirection: "row",
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center"
  },
  layout: {
    flex: 1,
    alignItems: "center"
  },
  button: {
    width: "50%",
    marginBottom: "10%"
  },
  modal: {
    backgroundColor: 'rgba(0, 0, 0, .8)',
    width: 400,
    height: 400,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalText: {
    color: 'white'
  },
});
