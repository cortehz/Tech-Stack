import React, { Component } from "react";
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from "react-native";
import { connect } from "react-redux";
import { CardSection } from "./common";
import * as actions from "../actions";

class ListItem extends Component {
  //WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
  componentDidUpdate(nextProps, nextState) {
    LayoutAnimation.spring();
  }
  renderDescription() {
    if (this.props.expanded) {
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>{this.props.library.item.description}</Text>
        </CardSection>
      );
    }
  }

  render() {
    // console.log(this.props);
    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(this.props.library.item.id)}
      >
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>
              {this.props.library.item.title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.item.id;
  return { expanded };
}; //ownProps is equal to the components props

export default connect(
  mapStateToProps,
  actions
)(ListItem); //null is for mapStateToProps
