/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, View, Button } from "react-native";
import { connect } from "react-redux";

import PlaceInput from "../components/PlaceInput/PlaceInput";
import PlaceList from "../components/PlaceList/PlaceList";
import PlaceDetail from "../components/PlaceDetail/PlaceDetail";
import {
  addPlace,
  deletePlace,
  selectPlace,
  deselectPlace
} from "../store/actions";

class Main extends Component {
  static navigationOptions = {
    title: "Teste"
  };

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  };

  placeAddedHandler = placeName => {
    this.props.onAddPlace(placeName);
    console.log("Place added.");
  };

  placeDeletedHandler = () => {
    this.props.onDeletePlace();
  };

  modalClosedHandler = () => {
    this.props.onDeselectPlace();
  };

  placeSelectedHandler = key => {
    this.props.onSelectPlace(key);
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.props.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}
        />
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList
          places={this.props.places}
          onItemSelected={this.placeSelectedHandler}
        />
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate("Details")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    alignItems: "center"
  }
});

const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: name => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: key => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
