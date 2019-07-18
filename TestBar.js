import React from "react";
import { StyleSheet } from "react-native";
import { mapping, light as lightTheme } from "@eva-design/eva";
import {
  BottomNavigation,
  BottomNavigationTab
} from "react-native-ui-kitten";

export default class TestBar extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 0
    };
  }

  onTabSelect = (selectedIndex) => {
    this.setState({ selectedIndex });
  };

  render() {
    return (
      <BottomNavigation
        selectedIndex={this.state.selectedIndex}
        onSelect={this.onTabSelect} >
        <BottomNavigationTab title='Tab 1'/>
        <BottomNavigationTab title='Tab 2'/>
        <BottomNavigationTab title='Tab 3'/>
      </BottomNavigation>
    );
  }
}

const styles = StyleSheet.create({

});
