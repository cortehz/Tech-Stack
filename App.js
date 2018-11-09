import React, { Component } from "react";
import { View, Text } from "react-native";
import Header from "./src/components/Header";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: null };
  }
  render() {
    return (
      <View>
        <Header headerText="Redux" />
      </View>
    );
  }
}

export default App;
