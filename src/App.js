import React, { Component } from "react";
import { View, Text } from "react-native";
import Header from "./components/common/Header";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";
import LibraryList from "./components/LibraryList";

const App = props => {
  return (
    <Provider store={createStore(reducers)}>
      <View style={{ flex: 1 }}>
        <Header headerText="Tech Stack" />
        <LibraryList />
      </View>
    </Provider>
  );
};

export default App;
