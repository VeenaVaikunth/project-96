import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
  Dimensions
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

export default class StoryCard extends Component {
  render() {
    return(
      <View style={styles.container}>
      <View style={styles.cardContainer}>
      <View style={styles.authorNameContainer}>
      <Text style={styles.authorNameText}>
        {this.props.story.author}
      </Text>
      </View>
      <Image
      source={require('../assets/story_image_3.png')}
      style={styles.postImage}
      />
      <View style={styles.captionContainer}>
      <Text style={styles.captionText}>
        {this.props.story.caption}
      </Text>
      </View>
      </View>
      </View>
    );
  }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cardContainer: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15
  },
  authorNameContainer: {
    flex: 0.85,
    justifyContent: 'center'
  },
  authorNameText: {
    fontSize: 20
  },
  postImage: {
    marginTop: 10,
    resizeMode: 'container',
    width: '100%',
    alignSelf: 'center',
    height: 275
  },
  captionText: {
    paddingTop: 10
  }
});